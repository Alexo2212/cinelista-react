import { useState } from 'react'
import './App.css'
import ListaPeliculas from './components/ListaPeliculas'
import { peliculasData } from './components/ListaPeliculas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <ListaPeliculas peliculas={peliculasData} />
    </div>
  )
}

export default App