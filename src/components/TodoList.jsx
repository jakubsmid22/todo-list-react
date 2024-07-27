
const TodoList = ({tasks, deleteTask}) => {

  return (
    <div className="min-h-[350px] flex flex-col gap-5 text-xl mt-5">
        {tasks.map((task, i) => {
            return <div key={i} className="flex w-96 justify-between">
                <p>{task}</p>
                <button onClick={() => deleteTask(i)}>X</button>
            </div>
        })}
    </div>
  )
}

export default TodoList