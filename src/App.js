import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <div className="app-container">
        <header>
          <h1>Akshat's Todo List</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          status={status}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default App;
