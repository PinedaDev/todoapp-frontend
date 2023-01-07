import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([])
  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10) + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle todo form

  const [isFormShowed, setIsFormShowed] = useState(false)

  const toggleForm = () => {
    isFormShowed ? setIsFormShowed(!isFormShowed) : setIsFormShowed(true)
  }

  return (
    <div className="App">
      <header>
        <h1>
          Track-It!
        </h1>
        <button onClick={toggleForm}>
          {!isFormShowed ? "Add To Do" : "Cancel"}
        </button>
      </header>
      <hr style={{ "border": "solid 1px white", "margin": "1rem 0" }} />
      {isFormShowed &&
        <AddTask onAdd={addTask} />}
      {
        tasks.length !== 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : (
          <p>Nothing to show</p>
        )

      }
    </div>
  );
}

export default App;
