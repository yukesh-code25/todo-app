import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (!task.trim()) return;

    addTodo(task);
    setTask("");
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default TodoForm;