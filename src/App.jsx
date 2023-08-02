import { useEffect, useState } from "react"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  
  const[ criptos, setCriptos] = useState()

  useEffect( ()=>{
    fetch(`${API_URL}assets`)
    .then( (response) => response.json())
    .then( (data) =>{
      setCriptos( data.data)
    })
    .catch( () => console.error("Error: la conexion falló"))

  },[])

  if( !criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Listado de criptomonedas</h1>

      <ul>
        {criptos.map( ({id,name, priceUsd}) => (
          <li key={id}>{name} - {priceUsd}</li>
        ))}
      </ul>
    </>
  )
}

export default App
