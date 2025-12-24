import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }

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
            <Button
              onClick={() => onSeeDetailsClick(tasks)}>
              <ChevronRightIcon />
            </Button>
            <Button
              onClick={() => onTaskDelete(tasks.id)}>
              <TrashIcon />
            </Button>
          </li> //renderize um paragrafo
        )
      )}
    </ul>
  );
}
export default Tasks;
