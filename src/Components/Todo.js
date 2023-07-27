import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <AiOutlineEdit onClick={() => editTodo(task.id)} />
        <AiOutlineDelete onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
