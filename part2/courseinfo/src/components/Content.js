import React from "react";
import Part from "./Part";

const Content = ({course}) => {
    return(
    <div>
        {course.parts.map(part => <Part part={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

export default Content