import { useState } from 'react'
import './App.css'
import ListaPeliculas from './components/ListaPeliculas'
import Filtroclasificacion from './components/Filtroclasificacion'
import { peliculasData } from './components/ListaPeliculas'

function App() {
  const [clasificacion, setClasificacion] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  // Calcular la longitud máxima del título más largo
  const maxLongitudTitulo = Math.max(...peliculasData.map(p => p.titulo.length))

  // Filtrar películas según clasificación y búsqueda
  const peliculasFiltradas = peliculasData.filter((pelicula) => {
    // Filtro por clasificación
    const pasaClasificacion = 
      clasificacion === 'Todos' || 
      pelicula.clasificacion === clasificacion

    // Filtro por búsqueda (case-insensitive)
    const pasaBusqueda = 
      busqueda === '' || 
      pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())

    return pasaClasificacion && pasaBusqueda
  })

  return (
    <div className="app">
      <Filtroclasificacion 
        clasificacionActiva={clasificacion}
        onClasificacionChange={setClasificacion}
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
        maxLongitudTitulo={maxLongitudTitulo}
      />
      
      {peliculasFiltradas.length > 0 ? (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      ) : (
        <div className="no-coincide">
          <p>❌ No coincide ninguna película con tu búsqueda</p>
        </div>
      )}
    </div>
  )
}

export default App