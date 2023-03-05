import { useState } from "react";
import ToDo from "./components/todo";
import ToDoForms from "./components/todoforms";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handlerToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Количество задач № {todos.length}</h1>
      </header>

      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            handlerToggle={handlerToggle}
          />
        );
      })}
      <ToDoForms addTask={addTask} />
    </div>
  );
}

export default App;
