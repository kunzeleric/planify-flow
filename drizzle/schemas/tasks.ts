import * as t from "drizzle-orm/pg-core"
import { pgTable as table } from "drizzle-orm/pg-core"
import { users } from "./users"

export const taskCategories = table("task_categories", {
  id: t.varchar("id").primaryKey(),
  name: t.varchar("name").notNull(),
  color: t.varchar("color"),
  userId: t.varchar("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  isDefault: t.boolean("is_default").default(false),
  createdAt: t.timestamp("created_at").defaultNow(),
})

export const tasks = table("tasks", {
  id: t.varchar("id").primaryKey(),
  title: t.varchar("title").notNull(),
  description: t.text("description"),
  dueDate: t.timestamp("due_date"),
  isCompleted: t.boolean("is_completed").default(false).notNull(),
  completedAt: t.timestamp("completed_at"),
  categoryId: t.varchar("category_id").references(() => taskCategories.id, {
    onDelete: "set null",
  }),
  userId: t
    .varchar("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),
  createdAt: t.timestamp("created_at").defaultNow(),
  updatedAt: t.timestamp("updated_at").defaultNow(),
})
