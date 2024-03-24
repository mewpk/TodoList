import React, { useState  , useEffect } from "react";

const AddTodo = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);


  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default AddTodo;
