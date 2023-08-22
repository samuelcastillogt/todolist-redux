import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button, Card } from '@mui/material' 
import { crear } from '../actions/crear';
const TaskForm = () => {
    const dispatch = useDispatch()
    const crearTask= (e)=>{  
      e.preventDefault()
      const {target} = e
      console.log(target.texto.value.length)
      if(target.texto.value.length <= 0){
        alert("Debe escribir un texto valido para crear una tarea")
      }else{
        dispatch(crear(target.texto.value))
      target.texto.value = ""
      }
      
    }
    return (
        <form onSubmit={crearTask} className="taskForm">
        <Input placeholder='Nueva tarea' name="texto"/>
        <Button variant="contained" type="submit" style={{margin: "10px"}}>Agregar</Button>
      </form>
    );
};

export default TaskForm;