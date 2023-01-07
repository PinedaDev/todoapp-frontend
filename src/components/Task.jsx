import React from 'react'
const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h2>{task.title}</h2>
            <h3>{task.date}</h3>
            <button onClick={() => onDelete(task.id)}>X</button>
        </div>
    )
}

export default Task