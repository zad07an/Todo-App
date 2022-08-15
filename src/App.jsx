import { useState } from 'react'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoList from './Components/TodoList/TodoList'
import TodoFooter from './Components/TodoFooter/TodoFooter'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    // {
    //   id: Math.random(),
    //   text: 'Learn JS',
    //   isCompleted: false
    // },
    // {
    //   id: Math.random(),
    //   text: 'Learn React.JS',
    //   isCompleted: false
    // },
    // {
    //   id: Math.random(),
    //   text: 'Learn Vue.JS',
    //   isCompleted: false
    // },
  ])



  const onChange = (newTodo) => {
    setTodos(todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo
      }
      return todo
    }))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((del) => del.id !== todo.id))
  }

  const onCleareCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  return (
    <div className="App">
      <h1 className="todo-title">TODO | LIST</h1>
     <div className='todos-container'>
      <TodoForm onAdd={(text) => {
        setTodos([
        ...todos,
        {
          id: Math.random(),
          text: text,
          isCompleted: false
        }])
      }}/>
      <TodoList todos={todos} onDelete={onDelete} onChange={onChange}/>
      <TodoFooter todos={todos} onCleareCompleted={onCleareCompleted}/>
     </div>
    </div>
  )
}

export default App
