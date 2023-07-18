import "./styles.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setNewTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue == null) return [];
    else return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function toggleChecked(id, completed) {
    setNewTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setNewTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function addTodo(title) {
    setNewTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleChecked}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
