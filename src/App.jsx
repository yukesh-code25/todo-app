import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const todo = {
      id: Date.now(),
      text: task,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const editTodo = (id) => {
    const newTask = prompt("Edit your task");

    if (!newTask || newTask.trim() === "") return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newTask }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>📝 My Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;