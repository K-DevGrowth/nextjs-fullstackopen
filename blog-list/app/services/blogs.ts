import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq, ilike } from "drizzle-orm";
import { getUserById } from "./users";

export const getBlogs = async (filter?: string) => {
  const searchValue = filter?.trim().toLowerCase();
  if (!searchValue) {
    return await db.select().from(blogs);
  }
  return await db
    .select()
    .from(blogs)
    .where(ilike(blogs.title, `%${searchValue}%`));
};

export const addBlog = async (
  title: string,
  author: string,
  url: string,
  likes: number,
  userId: number,
) => {
  await db.insert(blogs).values({ title, author, url, likes, userId });
};

export const getBlogById = async (id: number) => {
  const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
  return blog;
};

export const increaseBlogLikes = async (id: number) => {
  const blog = await getBlogById(id);
  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes + 1 })
      .where(eq(blogs.id, id));
  }
};
