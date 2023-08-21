import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {

    const addedTask={
      id:todoList.length ===0 ? 1: todoList[todoList.length-1].id+1,
      name:newTask
    }
    const newTodoList = [...todoList, addedTask];
    setTodoList(newTodoList);
  };
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} placeholder="Enter task Here"></input>
        <button onClick={addTask}>+</button>
      </div>
      <div className="viewTsk">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task.name}</h1>
              <button onClick={() => deleteTask(task.id)}>DELETE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
