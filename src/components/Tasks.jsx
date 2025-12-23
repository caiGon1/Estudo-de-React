import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md  shadow">
      {props.tasks.map(
        (
          tasks //para cada tarefa
        ) => (
          <li key={tasks.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(tasks.id)}
              className={`bg-slate-400 text-left text-white p-2 rounded-md w-full pointer-events-auto cursor-pointer ${
                tasks.isCompleted && "line-through"
              }`}
            >
              {tasks.title}
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white">
              <ChevronRightIcon />
            </button>
          </li> //renderize um paragrafo
        )
      )}
    </ul>
  );
}
export default Tasks;
