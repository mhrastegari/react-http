import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import GetPostFromId from "./components/GetPostFromId";

function App() {
  return (
    <div className="App">
      <PostForm />
      <GetPostFromId />
      <PostList />
    </div>
  );
}

export default App;
