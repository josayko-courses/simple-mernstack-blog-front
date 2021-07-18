const BlogForm = ({ addNewBlog }) => {
  return (
    <div>
      <form onSubmit={addNewBlog}>
        <label>Blog title:</label>
        <input type="text" required />
        <label>Blog content:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <input type="text" required />
        <input type="submit" name="Add blog" />
      </form>
    </div>
  );
};

export default BlogForm;
