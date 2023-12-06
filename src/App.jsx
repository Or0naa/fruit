import { useState } from 'react'
import './App.css'
import Items from './Items.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
      <h1>Orna</h1>
      <Items />
  
      </div>
    
  )
}

export default App
