// src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks } from './firebase';
import "./App.css"
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
