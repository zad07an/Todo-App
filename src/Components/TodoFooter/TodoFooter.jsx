import './TodoFooter.css'

function TodoFooter({todos, onCleareCompleted}) {

  const completedSize = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="todo-footer-container">
      <span className="todo-footer-completeds">{completedSize}/{todos.length} Completed</span>
      <button className="todo-footer-button" onClick={onCleareCompleted}>Cleare Completeds</button>
    </div>
  )
}

export default TodoFooter;