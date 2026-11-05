import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import UseEffect from './Components/useEffect.jsx'
import App from './App.jsx'
import Usestate from './Components/useState.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <UseEffect/>
    <Usestate/>
  </>
)
