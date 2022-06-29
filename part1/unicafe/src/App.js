import React, { useState } from 'react'
import './App.css';

const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>)
const Stat = ({label, amount}) => {
  return(
    <tr>
      <td>{label}</td>
      <td>{amount}</td>
    </tr>
  )
}
const Header = ({ heading }) => (<h1>{heading}</h1>)

const App = () => {

  const [good, setGood ] = useState(0)
  const [neutral, setNeutral ] = useState(0)
  const [bad, setBad ] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div className="App">
      <Header heading={"Give Feedback"} />
      <Button handleClick={handleGood} text={"good"} />
      <Button handleClick={handleNeutral} text={"neutral"} />
      <Button handleClick={handleBad} text={"bad"} />
      <p>
        {(good + bad + neutral) >= 1 ? "" : "No feedback given"}
      </p>
      <table>
        <thead>
          <Header heading="Statistics" />
        </thead>
        <tbody>
          <Stat label={good ? "good" : ""} amount={good ? good : ""}/>
          <Stat label={neutral ? "neutral" : ""} amount={neutral ? neutral :""}/>
          <Stat label={bad ? "bad" : ""} amount={bad ? bad : ""}/>
          <Stat label={(good + bad + neutral) >= 1 ? "all" : ""} amount={(good + bad + neutral) >= 1 ? good + bad + neutral : ""} />
          <Stat label={(good + bad + neutral) >= 1 ? "average" : ""} amount={(good + bad + neutral) >= 1 ? (good - bad)/(good + bad + neutral) : ""} />
          <Stat label={good ? "positive" : ""} amount={good ? good/(good+bad+neutral) * 100 + "%" : ""} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
