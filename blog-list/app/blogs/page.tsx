import { Suspense } from "react";
import Link from "next/link";
import Form from "next/form";
import { getBlogs } from "../services/blogs";

type SearchParams = Promise<{ filter?: string }>;

const BlogList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { filter } = await searchParams;
  const blogs = getBlogs(filter);

  return (
    <>
      <Form action="/blogs">
        <label htmlFor="filter">Title: </label>
        <input type="text" name="filter" defaultValue={filter} id="filter" />
        <button>search</button>
      </Form>

      {blogs.length === 0 ? (
        <p>not found</p>
      ) : (
        <ul>
          {blogs
            .sort((a, b) => b.likes - a.likes)
            .map((blog) => (
              <li key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

const Blog = ({ searchParams }: { searchParams: SearchParams }) => (
  <>
    <h2>Blogs</h2>
    <Suspense fallback={<p>Loading...</p>}>
      <BlogList searchParams={searchParams} />
    </Suspense>
  </>
);

export default Blog;
