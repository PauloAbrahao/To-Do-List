import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title:'Estudar React',
      completed: false,
    },
    {
      id: '2',
      title:'Revisar disciplina faculdade',
      completed: false,
    },
    {
      id: '3',
      title:'Ler 1984',
      completed: true,
    },

  ])

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },];

    setTasks(newTask)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} ></AddTask>
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;
