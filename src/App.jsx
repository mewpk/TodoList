import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);


  const addTodo = (todo) => {
    if(!todo){

      return;
    }
    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };



  return <div className="container">
    <h1>Todo List</h1>
    <AddTodo handleAddTodo={addTodo}/>
  </div>;
};

export default App;
