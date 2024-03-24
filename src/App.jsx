import React, { useState ,useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

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
    <TodoItem todos={todos}/>
  </div>;
};

export default App;
