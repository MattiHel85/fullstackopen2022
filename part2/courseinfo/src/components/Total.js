import React from "react";

const Total = ({course}) => {
    const total = course.parts.reduce((prevValue, currentValue) => prevValue + currentValue.exercises, 0)
    console.log('The total is', total)
    return <p>Number of exercises: {total}</p>
}

export default Total