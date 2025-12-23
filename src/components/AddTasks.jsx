import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = React.useState("123");
    const [description, setDescription] = React.useState("123");
    return (
        <div className="bg-slate-200 space-y-4 p-6 shadow rounded-md flex flex-col">
            <input className="bg-white border border-slate-300 outline-slate-400 px-4 py-2  rounded-md" type="text" placeholder="Digite o título da tarefa" value={title}></input>
            <input className="bg-white border border-slate-300 outline-slate-400 px-4 py-2  rounded-md" type="text" placeholder="Digite a descrição da tarefa" value={description}></input>
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}
export default AddTasks;