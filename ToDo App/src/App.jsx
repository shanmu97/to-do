import { useState, useContext, useEffect } from "react";
import "./App.css";
import { todoContext } from "./Contexts/ToDoContext";
import Card from "./Card";

function App() {
  const [Inp, setInp] = useState("");
  const { Tasks, setTasks } = useContext(todoContext);

  const addTask = (e) => {
    e.preventDefault();
    if(Inp===""){
      alert("Task is Empty..!!")
      return
    }
    setTasks([
      ...Tasks,
      {
        id: Tasks.length + 1, // Ensure unique ID
        todo: Inp,
        completed: false,
      },
    ]);
    setInp("");
  };

  const editTask =(id,text)=>{
    setTasks((tasks)=>tasks.map((task)=>task.id===id?{...task,todo:text}:task))
  }

  const deleteTask=(id)=>{
    setTasks((tasks)=>tasks.filter((task)=>task.id!==id))
  }

  useEffect(()=>{
    const data =JSON.parse(localStorage.getItem("tasks"))
    if(data && data.length>0){
      setTasks(data)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(Tasks))
  },[Tasks])

  return (
    <>
      <h1 className="text-center text-white text-5xl font-bold mt-24">Tasks</h1>
      <div className="flex justify-center items-center">
        <input
          className="w-6xl bg-white my-16 px-6 py-6 rounded-l-xl text-3xl outline-none"
          type="text"
          placeholder="Task"
          value={Inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-6 px-4 text-3xl rounded-r-xl cursor-pointer"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      {Tasks.map((task) => (
        <Card key={task.id} id={task.id} todo={task.todo} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </>
  );
}

export default App;
