// src/components/TaskForm.js
import React, { useState } from 'react';
import { addTask } from '../firebase';


const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate, completed: false };
    await addTask(newTask);
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
