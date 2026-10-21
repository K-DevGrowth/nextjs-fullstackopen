import { Suspense } from "react";
import { likeBlog } from "@/app/actions/blogs";
import { getBlogById, getBlogs } from "@/app/services/blogs";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return getBlogs().map((blog) => ({ id: String(blog.id) }));
};

const BlogContent = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <ul>
      <li>
        {blog.title} by {blog.author}
      </li>
      <li>url: {blog.url}</li>
      <li>
        likes: {blog.likes}{" "}
        <form action={likeBlog}>
          <input type="hidden" value={blog.id} name="id" />
          <button>Likes</button>
        </form>
      </li>
    </ul>
  );
};

const BlogPage = ({ params }: { params: Promise<{ id: string }> }) => (
  <Suspense fallback={<p>Loading...</p>}>
    <BlogContent params={params} />
  </Suspense>
);

export default BlogPage;
