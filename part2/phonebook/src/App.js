import {React, useState} from 'react';
import './App.css';

const App = () =>  {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas'
    },
    {
      id: 2,
      name: 'Jorma Ori'
    }
  ])

  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    let personObject = {
      id: persons.length + 1,
      name: newName
    }
    persons.map(person => person.name === personObject.name ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(personObject)))
    setNewName('')
  }


  return (
    <div className="App">
      <h2>
        Phonebook
      </h2>
      <form>
        <div>
          <span>Name: </span>
          <input value={newName} onChange={addName} />
          <button type='submit' onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>
        Numbers
      </h2>
      {persons.map(person => <p key={person.id}>{person.name}</p>)}
    </div>
  );
}

export default App;