import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskDetails from './components/TaskDetails'

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

  // useEffect(() => {
  //   const fetchTasks = async () => {

  //     const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10") 

  //     setTasks(data)
  //   }
  //   fetchTasks();
  // }, [])


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
    <Router>
      <div className="container">
        {/* 
        <AddTask handleTaskAddition={handleTaskAddition}  ></AddTask>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} /> */}
        <Header />

        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} ></AddTask>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
          </>
        )}/>

          {/* path = caminho da Route, para renderizar o componente somente quando estiver na url da task */}

        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
}

export default App;
