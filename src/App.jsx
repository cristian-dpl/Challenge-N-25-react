import { useState } from 'react';
import ClimaCiudad from './ClimaCiudad.jsx';


const App = () => {
  const [ciudad, setCiudad] = useState('');
  const [ciudadIngresada, setCiudadIngresada] = useState('');
  const apiKey = 'b489bbc858e7bdf9a8564bc9d0d1c790';

  const manejarCambio = (e) => {
    setCiudad(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    setCiudadIngresada(ciudad);
  };

  return (
    <div className='container'>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          value={ciudad}
          onChange={manejarCambio}
          placeholder="Ingresa una ciudad"
        />
        <button type="submit">Obtener Clima</button>
      </form>
      {ciudadIngresada && <ClimaCiudad ciudad={ciudadIngresada} apiKey={apiKey} />}
    </div>
  );
};

export default App;

