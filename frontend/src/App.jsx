import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

 function App() {
  const [todos, setTodos] = useState([]);

    useEffect(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(function(res){
      res.json().then((response)=>{
        setTodos(response.todos);
      })
    })},[]);
 return (
  <div>
    <CreateTodo/>
    <Todos todos={todos}></Todos>
    </div>
 )
}

export default App
