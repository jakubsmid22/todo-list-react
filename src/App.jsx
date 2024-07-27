import { useState } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, text]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, i) => i !== id));
  };

  return (
    <main className="flex flex-col gap-5 items-center">
        <h1 className="text-4xl font-bold mb-5">To Do List</h1>
        <Form addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} />
    </main>
  )
}

export default App;