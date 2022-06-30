import React, { useState } from 'react'
import './App.css';
import Button from './Button';
import Anecdote from './Anecdote';


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes ] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const chooseQuote = () => {
    let num = Math.floor(Math.random() * anecdotes.length)
    setSelected(num)
  }

  const logVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    findMostVotes()
  }

  const findMostVotes = () => {
    let max = 0
    let index = 0

    for(let i = 0; i < votes.length; i++){
      if(votes[i] >= max){
        max = votes[i]
        index = i
      }
    }
    setMostVotes(index)
  }
  
  console.log(votes)

  return (
    <div className="App">
      <Anecdote anecdote={anecdotes[selected]} voteCount={votes[selected]} />
      <br></br>
      <Button text={"vote"} handleClick={logVote}/>
      <Button text={"next"} handleClick={chooseQuote}/>
      <br></br>
      <h3>
        {mostVotes < 1 ? '':'Anecdote with the most votes' }
      </h3>
      <p>
        {mostVotes < 1 ? '':<Anecdote anecdote={anecdotes[mostVotes]} voteCount={votes[mostVotes]} /> }
      </p>
      
    </div>
  );
}

export default App;
