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
    {
      id: 2,
      text: 'Toma',
      completed: false
    },
    {
      id: 3,
      text: 'No cu',
      completed: false
    }
  ])
  
  return (
    <div>
      <div className="caxota">
        <AddTask />
        <Tasks tasks={tasks} /> 

      </div>
    </div>
    
  )
}

export default App