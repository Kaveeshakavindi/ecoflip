import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './input.css'
import RoutesDef from './RoutesDef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar/>
      <RoutesDef/>
    </div>

  )
}

export default App
