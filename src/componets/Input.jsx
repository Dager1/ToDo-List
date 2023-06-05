import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";

function Input() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo.title);
    } else {
      setTask("");
    }
  }, [editTodo]);

  const updateTodo = (task, id, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: task, completed } : todo
    );
    setTodos(newTodos);
    setEditTodo(null);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: task, completed: false }]);
      setTask("");
    } else {
      updateTodo(task, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          className="border border-gray-300 px-4 py-2 rounded-md"
          type="text"
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
          Submit
        </button>
      </form>
      <ToDo todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default Input;
