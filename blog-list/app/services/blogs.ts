const blogs = [
  { id: 1, title: "HTML is easy", author: "John", url: "html.com", likes: 3 },
  {
    id: 2,
    title: "How to become a web dev",
    author: "Ryan",
    url: "web.com",
    likes: 5,
  },
];

let nextId = 3;

export const getBlogs = (filter?: string) => {
  const searchValue = filter?.trim().toLowerCase();
  if (!searchValue) {
    return blogs;
  }
  return blogs.filter((blog) => blog.title.toLowerCase().includes(searchValue));
};

export const addBlog = (
  title: string,
  author: string,
  url: string,
  likes: number,
) => {
  blogs.push({ id: nextId++, title, author, url, likes });
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};

export const increaseBlogLikes = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    blog.likes += 1;
  }
};
