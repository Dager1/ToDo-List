import React from "react";

function ToDo({ todos, setTodos, setEditTodo }) {
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="border rounded-lg p-4 mb-4">
          <input
            value={todo.title}
            onChange={(event) => event.preventDefault()}
            className="border rounded-lg p-2"
          />
          <div className="mt-2">
            <button
              onClick={() => handleEdit(todo)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteTask(todo.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default ToDo;
