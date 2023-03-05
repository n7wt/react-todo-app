import { useState } from "react";

function TodoForms({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handlerChange = (a) => {
    setUserInput(a.currentTarget.value);
  };

  const handlerSubmit = (a) => {
    addTask(userInput);
    a.preventDefault();
    setUserInput("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handlerChange}
        placeholder="Новая задача"
      />
      <button>
        <i>+</i>
      </button>
    </form>
  );
}

export default TodoForms;
