import { useState } from "react";
import { createContext } from "react";

export const todoContext = createContext(null);

export const ToDoContextProvider = ({ children, editTasks }) => {
    const [Tasks, setTasks] = useState([]);
   
  return (
    <todoContext.Provider value={{ Tasks, setTasks}}>
      {children}
    </todoContext.Provider>
  );
};
