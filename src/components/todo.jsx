import removeImg from "../images/delete.png";

function Todo({ todo, removeTask, handlerToggle }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => handlerToggle(todo.id)}
      >
        {todo.task}
      </div>
      <div onClick={() => removeTask(todo.id)}>
        <img src={removeImg} alt="" />
      </div>
    </div>
  );
}

export default Todo;
