import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button, Card } from '@mui/material' 
import { crear } from '../actions/crear';
const TaskForm = () => {
    const dispatch = useDispatch()
    const crearTask= (e)=>{  
      e.preventDefault()
      const {target} = e
      dispatch(crear(target.texto.value))
      target.texto.value = ""
    }
    return (
        <form onSubmit={crearTask} className="taskForm">
        <Input placeholder='Nueva tarea' name="texto"/>
        <Button variant="contained" type="submit">Agregar</Button>
      </form>
    );
};

export default TaskForm;