export function TodoItems({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
          checked={completed}
        ></input>
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
