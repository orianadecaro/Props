import React from 'react';
import Saludos from './components/Saludos';
import Comentarios from './components/Comentarios';
function App() {

  return (
    <div className='container mt-5'>
      <h1>Proyecto desde cero</h1>
      <Saludos persona='Oriana' edad={32} />
      <Saludos persona='Juancito' edad={23} />
      <Saludos persona='Miguelito' edad={2} />
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentarios
        urlImagen='https://picsum.photos/64'
        persona='Pedrito'
        texto='hola' />
      <Comentarios 
       urlImagen='https://picsum.photos/64'
        persona='Ignacio'
        texto='¿como estas?' />
      <Comentarios  
      urlImagen='https://picsum.photos/64'
        persona='Uriel'
        texto='Cine y pizza' />
    </div>
  );

}

export default App;
