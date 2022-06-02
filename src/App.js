import React, { useState, useEffect } from 'react';
import './App.css';
// Importing components

import Form from './components/Form'
import TodoList from './components/TodoList';
function App() {


  //State definitions.
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //Use Effects

  useEffect(() => {
    getLocalTodos();
  }, [])


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  /*
  Something about Use Effect.
  2 parameters - One function,
   Other is when/ on what state change it should execute ===> [].
  */


  //Functions

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //Save state to localstorage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  //Get starting state from localstorage

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let locstoragetodo = localStorage.getItem('todos', JSON.stringify(todos))
      // console.log(locstoragetodo)
      setTodos(JSON.parse(locstoragetodo))
    }
  }


  return (
    <div className="App">
      <header>
        <h1> To-do eh? </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}

      />
      <TodoList setTodos={setTodos} todos={todos}
        filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
