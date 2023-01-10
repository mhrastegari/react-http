import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [post, setPost] = useState({ userId: "", title: "", body: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        alert(`${post.title} posted successfully`);
      })
      .catch((error) => {
        alert(`Error posting ${post.title}`);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="userId"
            value={post.userId}
            onChange={(e) => setPost({ ...post, userId: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
