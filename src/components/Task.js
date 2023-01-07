import React from 'react'
const Task = ({ task, onDelete }) => {
    return (
        <div>
            <h2>{task.title}</h2>
            <h3>{task.date}</h3>
            <button onClick={() => onDelete(task.id)}>delete</button>
        </div>
    )
}

export default Task