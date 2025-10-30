import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const db = drizzle(pool)

export async function getDatabaseVersion(): Promise<string> {
  const result = await pool.query("SELECT version();")
  return result.rows[0].version
}

export async function getDatabaseMaxConnections(): Promise<number> {
  const result = await pool.query("SHOW max_connections;")
  return parseInt(result.rows[0].max_connections)
}

export async function getDatabaseOpenedConnections(): Promise<number | null> {
  const result = await pool.query(
    `SELECT * FROM pg_stat_activity WHERE state = 'active';`
  )
  return result.rowCount
}
