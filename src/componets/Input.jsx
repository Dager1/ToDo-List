import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4, title: task, completed: false }]);
    setTask("");
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
    </div>
  );
}

export default Input;
