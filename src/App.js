import axios from 'axios';
import { useState, useFetch } from 'react';

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

  return (
    <div className="App">
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
