import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  //initialize useState
  const [value, setValue] = useState("");
  //declaring handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    //adding a value to todo list
    addTodo(value);
    //setting todo input to empty string
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        required
        placeholder="what is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
