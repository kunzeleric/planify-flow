import {
  getDatabaseMaxConnections,
  getDatabaseOpenedConnections,
  getDatabaseVersion,
} from "@/lib/drizzle"
import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const updatedAt = new Date().toISOString()

  return NextResponse.json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: await getDatabaseVersion(),
          max_connections: await getDatabaseMaxConnections(),
          opened_connections: await getDatabaseOpenedConnections(),
        },
      },
    },
    { status: 200 }
  )
}
