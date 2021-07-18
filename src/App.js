import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import UpdateForm from './components/UpdateForm';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogForm, showBlogForm] = useState(false);
  const [updateForm, showUpdateForm] = useState(false);
  const [blogToUpdate, setBlogToUpdate] = useState({});
  const baseURL = 'http://localhost:3030/blogs/';

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addBlogForm = (e) => {
    e.preventDefault();
    showBlogForm(true);
  };

  const updateBlogForm = (e) => {
    e.preventDefault();
    const blog = blogs.find((blog) => blog.id === Number(e.target.id));
    setBlogToUpdate(blog);
    showUpdateForm(true);
  };

  const deleteBlog = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.filter(
      (blog) => blog.id !== Number(e.target.id)
    );
    setBlogs(updatedBlogs);
    axios
      .delete(baseURL + e.target.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const addNewBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Math.floor(Math.random() * 1000000),
      title: e.target[0].value,
      content: e.target[1].value,
      author: e.target[2].value
    };
    showBlogForm(false);
    setBlogs(blogs.concat(newBlog));
    axios
      .post(baseURL, newBlog)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateBlog = (e, blogToUpdate) => {
    e.preventDefault();
    const newBlog = {
      title: e.target[0].value,
      content: e.target[1].value,
      author: e.target[2].value
    };
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === blogToUpdate.id) {
        blog.title = e.target[0].value;
        blog.content = e.target[1].value;
        blog.author = e.target[2].value;
      }
      return blog;
    });
    setBlogs(updatedBlogs);
    axios
      .put(baseURL + blogToUpdate.id, newBlog)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    showUpdateForm(false);
  };

  return (
    <div className="App">
      <h1>Blogs</h1>
      {!blogForm && !updateForm && (
        <button onClick={addBlogForm}>Add new blog</button>
      )}
      {!blogForm &&
        !updateForm &&
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <button id={blog.id} onClick={deleteBlog}>
              delete
            </button>
            <button id={blog.id} onClick={updateBlogForm}>
              update
            </button>
          </div>
        ))}
      {blogForm && <BlogForm addNewBlog={addNewBlog} />}
      {updateForm && (
        <UpdateForm updateBlog={updateBlog} blogToUpdate={blogToUpdate} />
      )}
    </div>
  );
};

export default App;
