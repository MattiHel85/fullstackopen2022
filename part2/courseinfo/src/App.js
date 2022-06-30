import React from 'react';
import './App.css';


const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Part =({ part, exercises}) => {
  return <p>{part}: {exercises}</p>
}

const Content = ({course}) => {
    return(
    <div>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </div>
  )
}
const Total = ({course}) => {
  return <p>Number of exercises: {course.parts[0].exercises + course.parts[0].exercises + course.parts[0].exercises}</p>
}

const Course = ({course}) => {
  console.log(course)
    return(  
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }  

  // console.log('App works...')

  // // const course = 'Half Stack application development'

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  return (
    <div className="App">
      <Course course={course} />
    </div>
  );
}

export default App;