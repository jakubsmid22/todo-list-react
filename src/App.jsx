import Form from "./components/Form"
import TodoList from "./components/TodoList"
const App = () => {
  return (
    <main className="flex flex-col gap-5 items-center">
        <h1>To Do List</h1>
        <Form/>
        <TodoList/>
    </main>
  )
}

export default App