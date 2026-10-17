import { createBlog } from "@/app/actions/blogs";

const NewBlog = () => {
  return (
    <div className="max-w-50 p-4">
      <h2>Create blog</h2>
      <form action={createBlog}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="author">author</label>
          <input type="text" id="author" name="author" />
        </div>
        <div>
          <label htmlFor="url">url</label>
          <input type="text" id="url" name="url" />
        </div>
        <div>
          <label htmlFor="likes">likes</label>
          <input type="number" id="likes" name="likes" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBlog;
