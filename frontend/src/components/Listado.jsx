import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, ListGroup } from 'react-bootstrap'




const Listado = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const getPersonas = async () => {
      const { data } = await axios.get(process.env.REACT_APP_SERVER) //Dirección de la API o el back
      setPersonas(data.personas)
    }
    getPersonas()
  }, [])


  const handleDelete = async (id) => {
    const { data } = await axios.delete(process.env.REACT_APP_SERVER + "/eliminar/" + id
    );
    setPersonas(personas.filter(persona => persona._id !== id))
    console.log(data);
  };





  return (
    <div>
      <br></br>
      <ListGroup>
      {personas.map(persona => (
          <ListGroup.Item key={persona._id} className="list-group-item list-group-item-action list-group-item-secondary ">
            {`Nombre: ${persona.nombre} | Plataforma: ${persona.plataforma} | Calificación: ${persona.calificacion}`}
            <br></br><Button className="btn btn-danger btn-sm" onClick={() => handleDelete(persona._id)}>
              Eliminar
            </Button>
          </ListGroup.Item>))}
          </ListGroup>
      
    </div>
    
  )
}
export default Listado

