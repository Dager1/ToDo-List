import React, { useState } from "react";

function Input() {
  const [task, setTask] = useState("");

  return (
    <div>
      <form>
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
