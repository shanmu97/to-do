import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToDoContextProvider } from './Contexts/ToDoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
    
  </StrictMode>,
)
