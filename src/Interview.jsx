// three buttons 
// increment by one every one second 
// reset button 
// increment by one inderement by one

import React, { useEffect, useState } from 'react';

export const Counter = () => {

 const[count, setCount] = useState(0);

 useEffect(() => {
  const timer = setInterval(() => 
  setCount((prevCount) => prevCount + 1))
  return () => clearInterval(timer)
 }, [])

 const timeIncrement = () => {
  setCount(count + 1)
 }
 const timeDecrement = () => {
  setCount(count - 1)
 }
 const timeReset = () => {
  setCount(0)
 }

 return (
  <div>
   <h1>Counter: {count}</h1>
   <div>
    <button onClick={() => setCount(count + 1)}>increment</button>
    <button onClick={() => setCount(0)}>reset</button>
    <button onClick={() => setCount(count - 1)}>decrement</button>
    {/* <button onClick={timeIncrement}>increment</button>
    <button onClick={timeReset}>reset</button>
    <button onClick={timeDecrement}>decrement</button> */}
   </div>
  </div> 
 )
}