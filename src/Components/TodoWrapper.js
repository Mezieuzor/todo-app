import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuid4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuid4();

export const TodoWrapper = () => {
  const [values, setValues] = useState([]);

  const addTodo = (todo) => {
    setValues([
      ...values,
      { id: uuid4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(values);
  };
  //mark or (rule over) completed tasks
  const toggleComplete = (id) => {
    setValues(
      values.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //deleteTodo

  const deleteTodo = (id) => {
    setValues(values.filter((todo) => todo.id !== id));
  };

  //edit Todo functionality

  const editTodo = (id) => {
    setValues(
      values.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setValues(
      values.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // generating a todo for each state
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {values.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
