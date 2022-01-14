import React from 'react'

function Saludos(props) {
    return (
        <div>
            <h2>Saludando a {props.persona}</h2>
            <p>edad {props.edad}</p>
        </div>
    )
}

export default Saludos
