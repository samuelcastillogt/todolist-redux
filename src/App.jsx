import React, { useRef, useState } from 'react'
import Modal from './components/Modal'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import logo from './logo.svg'
import './App.css'
function App() {
 const [modal, setModal] = useState(false)
  return (
    <React.Fragment>
     <TaskForm /> 
     <TaskList />     
    </React.Fragment>
  )

}

export default App
