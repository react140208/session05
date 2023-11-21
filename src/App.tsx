import { useState } from "react";
import "./App.css";
import PostIndex from "./pages/Post/PostIndex";
import TaskList from "./components/TaskList/TaskList";
import PhotoIndex from "./pages/Photo/PhotoIndex";
import TodoIndex from "./pages/Todo/TodoIndex";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <TodoIndex></TodoIndex>
      <PhotoIndex></PhotoIndex>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <PostIndex></PostIndex>}

      <h1>Task List</h1>
      <TaskList></TaskList>
    </>
  );
}

export default App;
