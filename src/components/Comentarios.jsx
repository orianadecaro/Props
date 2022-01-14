import React from 'react'
import Imagen from './Imagen';
import Persona from './Persona';
import Texto from './Texto';

function Comentarios(props) {
    return (
        <div className="media">
           <Imagen urlImagen={props.urlImagen}/>
            <div className="media-body">
                <Persona persona={props.persona}/>   
                <Texto texto={props.texto}/>           
                  

            </div>
            
        </div>
    )
}

export default Comentarios;
