import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar programação com foco em react",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Exercitar",
      description: "Ir a academia",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Ler",
      description: "Ler até 3 capitulos de um livro",
      isCompleted: false,
    },
  ]);

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === tasksId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      } else {
        return tasks;
      }
    });
    setTasks(newTasks)
  }

  //State
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-500px">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}
export default App;
