import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/context.jsx';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
  </BrowserRouter>
)