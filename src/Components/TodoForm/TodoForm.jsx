import { useState } from 'react';
import './TodoForm.css'

function TodoForm({onAdd}) {

  const [text, setText] = useState('')

  return (
    <form className="todo-form-container"
    onSubmit={(e) => {
      e.preventDefault()
      if (text.replaceAll(' ', '')) {
        onAdd(text)
        setText('')
      }
    }}>
      <input className="todo-form-input" type="text" placeholder='What have you planned?' value={text} onChange={(e) => {
          setText(e.target.value)
        }}/>
      <button className="todo-form-button">Add</button>
    </form>
  )
}

export default TodoForm;