import  { useState, useEffect } from 'react';

const ClimaCiudad = ({ ciudad, apiKey }) => {
  const [temperatura, setTemperatura] = useState(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const obtenerTemperatura = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        const temp = data.main.temp;
        setTemperatura(temp);

        if (temp > 30) {
          setMensaje('Hace mucho calor');
        } else if (temp < 10) {
          setMensaje('Hace mucho frío');
        } else {
          setMensaje('');
        }
      } catch (error) {
        console.error('Error al obtener la temperatura:', error);
        setMensaje('Error al obtener la temperatura');
      }
    };

    obtenerTemperatura();
  }, [ciudad, apiKey]);

  return (
    <div className='container__clima'>
      <h1>Clima en {ciudad}</h1>
      {temperatura !== null ? (
        <div>
          <p>Temperatura: {temperatura}°C</p>
          {mensaje && <p>{mensaje}</p>}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ClimaCiudad;