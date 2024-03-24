import React, { useState, useEffect } from "react";

const AddTodo = ({ handleAddTodo,handleEditTodo, display, edit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    handleAddTodo(input);
    setInput("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.name);
    }
  }, [edit]);

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={(e) => {
          if (display) {
            handleSubmit(e);
            return;
          }
          if (edit) {
            handleEditTodo(input, edit.id);
            setInput("");
            return;
          }
        }}
      >
        {display ? "Add" : "Edit"}
      </button>
    </div>
  );
};

export default AddTodo;
