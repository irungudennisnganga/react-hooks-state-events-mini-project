import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(task.text);
  };

  return (
    <div key={task} className="task">
      <div className="label">{task && task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
