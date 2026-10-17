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

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (
  title: string,
  author: string,
  url: string,
  likes: number,
) => {
  blogs.push({ id: nextId++, title, author, url, likes });
};
