import './App.css';
import React from 'react';
import ToDoList from './ToDoList';
import { Counter } from './Interview';

function App() {
  return (
    <div className="App">
      <ToDoList/>
      <Counter />
    </div>
  );
}

export default App;
