import React from 'react'
import { useState,useEffect } from 'react'
import "./App.css"
import Form from './src/components/Form'
import TodoList from './src/components/TodoList'

const App = () => {
 


  const [inputText, setInputText] = useState("");
  const [todos,setTodos] =useState([]);
  const [status,setStatus]= useState("all");
  const [filteredTodos,setFilteredTodos] =useState([]);

  useEffect(() =>{
    filterHandler()
  },[todos,status]);

  const filterHandler=()=>{  
    switch(status){
        case 'completed':
            setFilteredTodos(todos.filter(todo => todo.completed === true));
            break;
        case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo.completed === false));
            break;
        default:
            setFilteredTodos(todos);
            break;  

    }
  }

  return (
    <div>
        <header>Todo List </header>      
        
        <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus ={setStatus}
       
        />
        <TodoList todos={todos} setTodos={setTodos}  filteredTodos={filteredTodos }/>

    </div>
  )
}

export default App