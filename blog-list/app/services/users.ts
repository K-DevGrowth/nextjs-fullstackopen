import { db } from "@/db";
import { users } from "@/db/schema";

export const getUsers = async () => {
  return await db.select().from(users);
};

export const getUserById = async (id: number) => {
  return await db.query.users.findFirst({
    where: { id },
  });
};

export const getUserByUsername = async (username: string) => {
  return await db.query.users.findFirst({
    where: { username },
    with: { blogs: true },
  });
};
