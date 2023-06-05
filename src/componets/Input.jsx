import React from "react";

function Input() {
  cosnt[(task, setTask)] = setState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default Input;
