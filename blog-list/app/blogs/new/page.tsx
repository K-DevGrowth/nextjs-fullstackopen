import { createBlog } from "@/app/actions/blogs";
import { getUsers } from "@/app/services/users";
import { Suspense } from "react";

export default function NewBlogPage() {
  return (
    <Suspense>
      <NewBlogContent />
    </Suspense>
  );
}

const NewBlogContent = async () => {
  const allUsers = await getUsers();
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
        <select name="userId" required>
          {allUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
