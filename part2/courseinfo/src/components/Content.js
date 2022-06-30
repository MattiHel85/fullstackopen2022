import React from "react";
import Part from "./Part";

const Content = ({course}) => {
    course.parts.map(part => console.log(part.name + " " + part.exercises))
    return(
    <div>
        {course.parts.map(part => <Part part={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

export default Content