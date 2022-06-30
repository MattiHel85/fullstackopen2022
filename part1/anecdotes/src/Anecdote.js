const Anecdote = ({anecdote, voteCount}) => {
    return(
        <span>
            {anecdote} 
            <br></br>
            This quote has been upvoted {voteCount} times
        </span>
    )
  }

  export default Anecdote;