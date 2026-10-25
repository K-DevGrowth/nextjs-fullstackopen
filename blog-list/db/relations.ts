import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  users: {
    blogs: r.many.blogs(),
  },
  blogs: {
    user: r.one.users({
      from: r.blogs.userId, // cột FK của blogs
      to: r.users.id, // cột PK của users
    }),
  },
}));
