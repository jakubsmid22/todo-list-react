
const TodoList = ({tasks}) => {

  return (
    <div>
        {tasks.map((task, i) => <p key={i}>{task}</p>)}
    </div>
  )
}

export default TodoList