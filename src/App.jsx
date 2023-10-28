
import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"


export default function App(){
  //use state runs function that sets localValue to "ITEMS"
  //but checks if "ITEMS" is empty, if it is an empty array 
  //will be passed/returned. If not, it will return "ITEMS" 
  //which is composed of todos, from local storage
  const [todos, setTodos] = useState(() => {
   const localValue = localStorage.getItem("ITEMS")
   if (localValue == null) return []


   return JSON.parse(localValue)
  })

  //any time our todos change, we call the function localstorage... 
  //to store all our todos in ITEMS 
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }), [todos]

  function addTodo(title){
    setTodos(currentTodos => {
          return[
            ...currentTodos, 
            {id: crypto.randomUUID(), title, completed:false}
          ]   
        })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, completed
          }

        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit = {addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      
    </>
  )
}