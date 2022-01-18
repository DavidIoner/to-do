import React from "react"
import "./Task.css"

const Task = ({task}) => {
    
    return <div className="task-container">{task.text}</div>
}

export default Task