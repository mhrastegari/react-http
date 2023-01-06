import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        this.setState({ errorMessage: "Error retreiving data" });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        <ul>
          <h2>List of posts</h2>
          {posts.length
            ? posts.map((post) => <li key={post.id}>{post.title}</li>)
            : null}
          {errorMessage ? <div>{errorMessage}</div> : null}
        </ul>
      </div>
    );
  }
}

export default PostList;
