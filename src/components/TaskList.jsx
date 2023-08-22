import React from 'react';
import {useSelector} from "react-redux"
import Task from './Task';
const TaskList = () => {
    const state = useSelector(state => state)
    return (
        <div className='lista' style={{display: "flex", justifyContent: "center"}}>
            {(state && state.length < 0) && <h2>Crea una tarea para iniciar</h2>}
            {(state && state.length > 0) && state.map(item => !item.terminada && <Task 
                                                          id={item.id}
                                                          key={item.id}
                                                          importante={item.important}
                                                          terminada={item.terminada}
                                                          contenido={item.content}
                                                          />)}

        </div>
    );
};

export default TaskList;