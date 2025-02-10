import React, { useState,useRef } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function Card({ todo, editTask, id, deleteTask }) {
  const [isChecked, setIsChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo);
  const pencilRef = useRef(null)

  if(isChecked){

  }
  const handleEdit = () => {
    if (editing) {
      editTask(id, newText);
      pencilRef.current.classList.remove("bg-blue-600")
    }else{
      pencilRef.current.classList.add("bg-blue-600")
    }
    setEditing(!editing);
  };

  return (
    <div className={`flex justify-between w-lg text-black mx-auto px-4 rounded-lg text-lg mb-4 ${isChecked?"bg-green-500 line-through":'bg-amber-50'}`}>
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="mx-2 w-4 h-4"
        />
        {editing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <h1>{newText}</h1>
        )}
      </div>
      <div>
        <button
          className="p-2 text-black rounded-lg hover:bg-blue-600 cursor-pointer mx-2"
          onClick={handleEdit}
          ref={pencilRef}
        >
          <PencilIcon className="w-4 h-4" />
        </button>
        <button className=" text-black rounded-lg hover:bg-red-600 cursor-pointer" onClick={()=>deleteTask(id)}>
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Card;
