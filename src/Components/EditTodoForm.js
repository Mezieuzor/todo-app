import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  //initialize useState
  const [value, setValue] = useState(task.task);
  //declaring handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    //adding a value to todo list
    editTodo(value, task.id);
    //setting todo input to empty string
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Update Task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
