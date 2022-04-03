import React from 'react'

const Recordatorio = (p) => {
return (
    <div className='recordatorio'>
        <h3>Selección anterior: {p.eleccionUltima.toUpperCase()}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul >
        {    p.historial.map((opcion,index) =>{
            return <li type="none" key={index}>{opcion.toUpperCase()}</li>
            })
        }
        </ul>
    </div>
)
}

export default Recordatorio