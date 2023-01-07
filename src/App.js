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

  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
