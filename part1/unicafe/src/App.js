import React, { useState } from 'react'
import './App.css';

const Button = ({text, handleClick}) => (<button>{text}</button>)

const App = () => {
  const [good, setGood ] = useState(0)
  const [neutral, setNeutral ] = useState(0)
  const [bad, setBad ] = useState(0)
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button text={"good"} />
      <Button text={"neutral"} />
      <Button text={"bad"} />
      <h2>Statistics</h2>
    </div>
  );
}

export default App;
