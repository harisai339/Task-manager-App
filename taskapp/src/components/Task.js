// src/components/Task.js
import React from 'react';
import { updateTask, deleteTask } from '../firebase';

const Task = ({ task, setTasks }) => {
  const handleCompletion = async () => {
    await updateTask(task.id, { completed: !task.completed });
    setTasks(prevTasks =>
      prevTasks.map(t => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <label>
        Completed:
        <input type="checkbox" checked={task.completed} onChange={handleCompletion} />
      </label>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
