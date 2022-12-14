import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, isEditing, setEditing, currentTodo, setCurrentTodo }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <h1>Todos</h1>

      {/* mapping todos from state array to Todo component */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            isEditing={isEditing}
            setEditing={setEditing}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
