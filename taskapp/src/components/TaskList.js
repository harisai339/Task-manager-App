// src/components/TaskList.js
import React from 'react';
import Task from './Task';


const TaskList = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
