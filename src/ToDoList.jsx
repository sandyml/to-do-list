import React, { useState } from 'react';

let id = 0;
const ToDoList = () => {

 // const [tasks, setTasks] = useState(initialState);
 const [tasks, setTasks] = useState([
  { id: id++, label: 'Study Python' },
  { id: id++, label: 'Start Python Project' },
  { id: id++, label: 'Take Hunter out for Walk' },
 ]);
 const [newTask, setNewTask] = useState('');

 return (
  <div>
   <h1>TO DO LIST</h1>
   <div>
    <input
     aria-label="Add New Task"
     placeholder="Add Your New Task"
     type="text"
     value={newTask}
     onChange={(e) => setNewTask(e.target.value)}
    />
   </div>
   <button
    onClick={() => {
     setTasks(
      tasks.concat({
       id: id++,
       label: newTask.trim(),
      }),);
     setNewTask('');
    }}>
    Add Task
   </button>
   <ul>
    {tasks.map(({ id, label }) => (
     <li key={id}>
      <span>{label}</span>
      <button
       onClick={() => {
        setTasks(
         tasks.filter((task) => task.id !== id),
        );
       }}>
       Done
      </button>
     </li>
    ))}
   </ul>
  </div>
 )
}

export default ToDoList;
