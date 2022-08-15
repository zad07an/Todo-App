import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'


function TodoList({todos, onChange, onDelete}) {
  return (
    <div className="todo-list-container">
      {
        todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onChange={onChange}/>
          )
        })
      }
    </div>
  )
}

export default TodoList;