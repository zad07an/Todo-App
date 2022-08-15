import {FiX} from 'react-icons/fi'
import './TodoItem.css'

function TodoItem({todo, onChange, onDelete}) {
  return (
    <div className="todo-item-container">
      <label className='todo-item-input-text'>
        <input className='todo-item-input' type="checkbox" checked={todo.isCompleted} onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked
          })
        }} />
        <p className='todo-item-text'>{todo.text}</p>
      </label>
      <button className='todo-item-button' onClick={() => {
        onDelete(todo)
      }}><FiX className='close-icon'/></button>
    </div>
  )
}

export default TodoItem;