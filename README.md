# Getting Started with Create React App

#Todo-Application
- [Screenshot![Todo-list](https://github.com/Mezieuzor/todo-app/assets/93710807/d6efaff4-027f-4bda-a3bc-668416346164)

## Table of contents

-What Makes a Great To-Do List App?
-Tasks should be fast to add and organize.
-There should be a variety of ways to organize the tasks.
-Ability to plan your workflow.
-Setting priorities.
-Reminders for any self-imposed deadlines.
-Allocation of tasks if using it for task management with a team.

- [Overview](
- What is a to-do list and how can it help in business and daily life?

Do any of the following seem familiar?

Do you often feel completely overwhelmed with the amount of work you’ve got to do?
You sometimes forget to do things that are important
People have to chase you to get things done
You find it a struggle to keep to deadlines
Don’t think you’re unusual because there are thousands of people who struggle with the same every day, not just in the workplace but in their personal lives too. Luckily, there is something very simple you can do to keep your life and work more organized.)
  - [The challenge](
  - What is a ToDo List?
What is a ToDo List? The definition is a simple one. It’s a list of tasks you need to complete or things that you want to do. 

Most typically, they’re organized in order of priority. Traditionally, they’re written on a piece of paper or post-it notes and act as a memory aid. As technology has evolved we have been able to create a todo list with excel spreadsheets, word documents, email lists, todo list apps, Microsoft to do and google to-do list to name a few. You can use a to do list in your home and personal life, or in the workplace.

Having a list of everything you need to do written down in one place means you shouldn’t forget anything important. By prioritizing the tasks in the list you plan the order in which you’re going to do them and can quickly see what needs your immediate attention and what tasks you can leave until a little later.
The Benefits of Using a To-Do List
One of the most important reasons you should use a to-do list is that it will help you stay organized. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.

When you complete a task, you can cross it off your list. This gives you a sense of progress and achievement, something you’ll lack if you’re always rushing from one task to the next. If you feel a sense of achievement, it spurs you on and motivates you to keep moving forward.

But that’s not the only benefit of a to-do list. 

Helps with motivation: To-do lists are a great motivational tool because you can use them to clarify your goals. You can divide your long-term goal into smaller, more achievable short-term goals and as you tick each one off your list, your confidence will increase.)
  
]()
- [My process](#Building an application like a todo-app has exposed my knowledge into making use of some react hoots like use-State)
  - [Built with](
  - Reactjs
  - CSS custom properties
  - Flexbox
  - CSS Grid)
  - [What I learned](#Here are a few more:

Improves your memory: A to do list acts as an external memory aid. It’s only possible to hold a few pieces of information at one time. Keep a to-do list and you’ll be able to keep track of everything, rather than just a few of the tasks you need to do. Your to do list will also reinforce the information, which makes it less likely you’re going to forget something.

Increases productivity: A to do list allows you to prioritize the tasks that are more important. This means you don’t waste time on tasks that don’t require your immediate attention. Your list will help you stay focused on the tasks that are the most important.

// How to generate a to-do for each state
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
)
  - [Continued development](#continued-development)
  
- [Author](
- Mezieuzor Amadike @2023
- )



