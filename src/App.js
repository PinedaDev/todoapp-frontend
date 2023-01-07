import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "My task",
      date: "Feb 5 8:00am",
      status: "In progress",
    }
  ])


  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
