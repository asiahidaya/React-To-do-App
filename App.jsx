import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  function addTask() {

    if (task.trim() === "") return;

    const newTask = {
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTask("");
  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  }

  function toggleComplete(index) {

    const updatedTasks = tasks.map((t, i) => {

      if (i === index) {
        return {
          ...t,
          completed: !t.completed
        };
      }

      return t;
    });

    setTasks(updatedTasks);
  }

  return (

    <div className="container">

      <h1>Todo App</h1>

      <h2>Total Tasks: {tasks.length}</h2>

      <h2>Completed Tasks: {tasks.filter(t => t.completed).length}</h2>

      <h2>Uncompleted Tasks: {tasks.filter(t => !t.completed).length}</h2>

      <h2>Percentage Completed: {tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0}%</h2>

      <h2>All tasks Completed: {tasks.every(t => t.completed) ? "Yes" : "No"}</h2>

      <div className="input-section">

        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>

      </div>

      <div className="task-list">

        {tasks.map((t, index) => (

          <div className="task" key={index}>

            <span
              className={t.completed ? "completed" : ""}
            >
              {t.text}
            </span>

            <div>

              <button onClick={() => toggleComplete(index)}>
                ✓
              </button>

              <button onClick={() => deleteTask(index)}>
                ✕
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;