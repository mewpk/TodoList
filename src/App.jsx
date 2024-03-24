import React, { useState ,useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";


let id = 1;


const App = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    console.log(todos);
  }, [todos]);


  const addTodo = (todo) => {
    if(!todo){

      return;
    }
    const data = {
      name : todo,
      id : id

    }

    id += 1;

    const newTodos = [...todos, data];

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);


    setTodos(newTodos);

  };



  return <div className="container">
    <h1>Todo List</h1>
    <AddTodo handleAddTodo={addTodo}/>
    <TodoItem todos={todos} deleteTodo={deleteTodo}/>
  </div>;
};

export default App;
