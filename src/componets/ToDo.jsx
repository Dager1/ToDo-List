import React from "react";

function ToDo({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            value={todo.title}
            onChange={(event) => event.preventDefault}
          />
          <div>
            <button>Edit</button>
            <button>Mark</button>
            <button>Delet</button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default ToDo;
