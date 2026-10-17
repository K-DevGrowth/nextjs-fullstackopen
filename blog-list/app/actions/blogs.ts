"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addBlog } from "../services/blogs";

export const createBlog = async (formData: FormData) => {
  const title = String(formData.get("title") ?? "");
  const author = String(formData.get("author") ?? "");
  const url = String(formData.get("url") ?? "");
  const likes = Number(formData.get("likes") ?? 0);

  addBlog(title, author, url, likes);

  revalidatePath("/blogs");
  redirect("/blogs");
};
