import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import { Card } from '@mui/material'
import {GoAlert} from "react-icons/go"
import {AiFillDelete} from "react-icons/ai"
import {importante} from "../actions/importante"
import { deleteTask } from "../actions/borrar"
const Task = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const importantee = id =>{
        dispatch(importante( id ))
    }
    const deletew = id =>{
        dispatch(deleteTask( id ))
    }
    return (
        <Card variant="outlined" 
              className='task'
              id={props.id}
              onClick={()=>{
                  importantee(props.id)
              }}>
         <p>{props.importante && <GoAlert style={{color: "red", fontSize: "20px"}} />}  {props.contenido}</p>
         
         {!props.terminada && <AiFillDelete 
            style={{
                fontSize: "2.3em"
            }}
            onClick={()=>{
             dispatch(deletew(props.id)) 
         }}/>}
        </Card>
    );
};

export default Task;
