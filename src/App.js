import React from 'react'
import './App.css' // This is the only way to import CSS files in React
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {  
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Vai',
      completed: false
    },
  ])
  
  const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		})

		setTasks(newTasks)
  }

  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskTitle,
      completed: false
    }
    setTasks([...tasks, newTask])
  }
  
  return (
    <div>
      <div className="caxota">
        <AddTask handleAddTask={handleAddTask} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/> 

      </div>
    </div>
    
  )
}

export default App