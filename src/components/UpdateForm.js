const UpdateForm = ({ updateBlog, blogToUpdate }) => {
  return (
    <div>
      <h2>Update blog</h2>
      <form onSubmit={(e) => updateBlog(e, blogToUpdate)}>
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

export default UpdateForm;
