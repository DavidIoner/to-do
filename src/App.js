import React from 'react'
import './App.css'; // This is the only way to import CSS files in React

const App = () => { 
  // var message = "Hello World!";
  const [message, setMessage] = React.useState("Hello World!")
  return (
    <div>
      <div className="caxota">{message}
        <button  onClick={() => setMessage('roula')}className="button">test</button>
      </div>
    </div>
  )
}

export default App