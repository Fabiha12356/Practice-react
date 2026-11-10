import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import UseEffect from './Components/useEffect.jsx'
import App from './App.jsx'
import Usestate from './Components/useState.jsx'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Hero/>
  </>
)
