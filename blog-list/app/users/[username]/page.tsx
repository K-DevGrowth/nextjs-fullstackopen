import Link from "next/link";
import { notFound } from "next/navigation";
import { getUserByUsername } from "../../services/users";
import { Suspense } from "react";

export default function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  return (
    <Suspense>
      <UserContent params={params} />
    </Suspense>
  );
}

const UserContent = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  const user = await getUserByUsername(username);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <h3>Blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
