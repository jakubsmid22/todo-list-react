import { useState } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks(tasks.push(text));
  }

  return (
    <main className="flex flex-col gap-5 items-center">
        <h1>To Do List</h1>
        <Form addTask={addTask} />
        <TodoList tasks={tasks} />
    </main>
  )
}

export default App;