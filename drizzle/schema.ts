import * as t from "drizzle-orm/pg-core"
import { pgTable as table } from "drizzle-orm/pg-core"

export const users = table("users", {
  id: t.varchar("id").primaryKey(),
  email: t.varchar("email").notNull().unique(),
  password: t.varchar("password").notNull(),
  name: t.varchar("name").notNull(),
  createdAt: t.timestamp("created_at").defaultNow(),
})
