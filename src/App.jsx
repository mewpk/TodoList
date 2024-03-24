import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);




  return <div className="container">
    <h1>Todo List</h1>
    <AddTodo />
  </div>;
};

export default App;
