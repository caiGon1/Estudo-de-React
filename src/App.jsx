import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import Title from "./components/Title";


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    // Se existir algo no localStorage, transforma em objeto. 
    // Se não, retorna um array vazio.
    return savedTasks ? JSON.parse(savedTasks) : [];
});

  useEffect(() => { 
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

/*
   useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        });
      const data = await response.json();
      setTasks(data);
    }
    fetchTasks();
  },[]);
  */

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === tasksId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      } else {
        return tasks;
      }
    });
    setTasks(newTasks);
  }
  function onTaskDelete(tasksId) {
    const newTasks = tasks.filter((task) => task.id != tasksId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  //State
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125 space-y-4">
       <Title>Gerenciador de Tarefas</Title>
        <AddTasks tasks={tasks} onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}
export default App;
