import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onTaskDelete}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md  shadow">
      {tasks.map(
        (
          tasks //para cada tarefa
        ) => (
          <li key={tasks.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(tasks.id)}
              className={`bg-slate-400 text-left text-white p-2 rounded-md w-full pointer-events-auto cursor-pointer ${
                tasks.isCompleted && "line-through"
              }`}
            >
              {tasks.title}
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white pointer-events-auto cursor-pointer">
              <ChevronRightIcon />
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white pointer-events-auto cursor-pointer"
            onClick={()=>onTaskDelete(tasks.id)}>
              <TrashIcon/>
            </button>
          </li> //renderize um paragrafo
        )
      )}
    </ul>
  );
}
export default Tasks;
