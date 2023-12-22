import React from 'react';
// import './TodoApp.css'
import { TodoProvider } from './component/TodoApp-1';
import TodoList from './component/TodoApp-2';

function App() {
  return (
    
    <TodoProvider>
    <div>
      <h1>To-Do List Application</h1>
      <TodoList/>
    </div>
  </TodoProvider>
  )
}

export default App;