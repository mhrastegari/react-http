import React, { useState, useEffect } from "react";
import axios from "axios";

function PostForm() {
  const [post, setPost] = useState({});
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeHandler = (e) => {
    e.target.name = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        alert("Data posted successfully");
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
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
