import React from 'react'

function Texto({texto}) {
    return (
       <p>{texto} </p> 
    )
}

export default Texto
// se elimina los props y se puede acceder directamente a la propiedad, entre llaves, del componente externo