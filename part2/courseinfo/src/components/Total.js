import React from "react";

const Total = ({course}) => {
    const total = course.parts.reduce((prevValue, currentValue) => prevValue + currentValue.exercises, 0)
    return <p>Number of exercises: {total}</p>
}

export default Total