import { getBlogs } from "../services/blogs";

const Blog = () => {
  const blogs = getBlogs();
  return (
    <ul>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <li key={blog.id}>
          {blog.title} by {blog.author}, url: <a href="#">{blog.url}</a>, likes:{" "}
          {blog.likes}
        </li>
      ))}
    </ul>
  );
};

export default Blog;
