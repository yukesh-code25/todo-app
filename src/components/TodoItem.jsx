function TodoItem({ todo, deleteTodo, editTodo }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>

      <div>
        <button onClick={() => editTodo(todo.id)}>
          Edit
        </button>

        <button onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;