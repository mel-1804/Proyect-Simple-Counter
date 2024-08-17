import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let numero = 0

setInterval(Counter, 1000);
function Counter() {
  numero++
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App numero={numero}/>
    </StrictMode>,
  )
}
