import React, { useState  , useEffect } from "react";

const AddTodo = ({handleAddTodo}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!input){
        return;
    }

    handleAddTodo(input );
    setInput("");




  }


  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Add
      </button>

    </div>
  );
};

export default AddTodo;
