import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [post, setPost] = useState({});
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        alert(`${title} posted successfully`);
      })
      .catch((error) => {
        alert("Error posting data");
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
