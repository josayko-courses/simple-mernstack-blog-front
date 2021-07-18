import axios from 'axios';
import { useState, useFetch } from 'react';
import BlogForm from './components/BlogForm';

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'First blog',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis alias molestias aspernatur animi vero.',
      author: 'JS'
    },
    {
      id: 2,
      title: 'Second blog',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ex praesentium voluptas provident mollitia id facilis unde beatae dignissimos. Nulla architecto voluptate iusto quia sit.',
      author: 'SB'
    }
  ]);

  const [blogForm, showBlogForm] = useState(false);

  const addBlog = (e) => {
    e.preventDefault();
    showBlogForm(true);
  };

  const deleteBlog = (e) => {
    e.preventDefault();
    console.log(e.target.id);
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
  };

  return (
    <div className="App">
      <h1>Blogs</h1>
      <button onClick={addBlog}>Add new blog</button>
      {!blogForm &&
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <button id={blog.id} onClick={deleteBlog}>
              delete
            </button>
          </div>
        ))}
      {blogForm && <BlogForm addNewBlog={addNewBlog} />}
    </div>
  );
};

export default App;
