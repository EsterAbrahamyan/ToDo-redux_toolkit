import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
  return (
    <div className="todo">
      <button onClick={deleteTodo}>x</button>
      <input type="checkbox"></input>
      <label>{props.text}</label>
    </div>
  );
};

export default TodoItem;