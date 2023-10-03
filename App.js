import React from 'react'
import { useState } from 'react'
import "./App.css"
import Form from './src/components/Form'
import TodoList from './src/components/TodoList'

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] =useState([]);

  return (
    <div>
        <header>Todo List </header>      
        
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
        <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App