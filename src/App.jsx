import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'
import Header from './components/Header'


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
      completed: false,
    },    
    {
      id: '4',
      title:'Academia',
      completed: false,
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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition}  ></AddTask>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
      </div>
    </>
  );
}

export default App;
