import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { CiSquarePlus } from "react-icons/ci";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, text: newText } : task)));
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task,  completed: !task.completed } : task)));
  };

  return (
    // <div className=" h-screen pt-32 bg-gradient-to-r from-blue-800 to-indigo-900">
    <div className=" h-screen pt-32 bg-[#0b6e9a]">
      <div className="bg-white w-2/5 min-w-[300px] max-w-[400px] border mx-auto p-4 rounded-md shadow-2xl ">
        <h3 className=" text-center text-xl font-bold mb-4">Todo App</h3>
        <div className="flex items-center justify-between">
          <input className="w-full h-12 pl-2 border-2 border-gray-200 rounded-lg" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task" />
          <button className=" text-5xl text-gray-600 p-2" onClick={addTask}>
            <CiSquarePlus />
          </button>
        </div>
        <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} completeTask={completeTask} />
      </div>
    </div>
  );
};

export default App;
