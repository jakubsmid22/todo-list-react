import { useState } from "react";

const Form = ({addTask}) => {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
    <form className="space-x-5" onSubmit={handleSubmit}>
        <input className="bg-transparent focus:outline-none border border-white pl-5 py-2" onChange={e => setText(e.target.value)} type="text" value={text} />
        <input role="button" type="submit" value="SUBMIT" />
    </form>
  )
}

export default Form