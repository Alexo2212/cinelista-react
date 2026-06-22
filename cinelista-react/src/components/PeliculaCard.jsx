#aqui haremos cards de las peliculas en listapeliculas.jsx
#los props del componente son : titulo, genero, duracion, clasificacion, sinopsis, 
#debes aplicar colores segun la clasificacion de la pelicula, por ejemplo: TE = verde, +14 = amarillo, +18 = rojo
#define los tipos de props con proptypes y utiliza como contenido jsx normal

import PropTypes from 'prop-types';
import '../styles/PeliculaCard.css';

const getColorByClassificacion = (clasificacion) => {
  switch (clasificacion) {
    case 'TE':
      return 'verde';
    case '+14':
      return 'amarillo';
    case '+18':
      return 'rojo';
    default:
      return 'default';
  }
};

const PeliculaCard = ({ titulo, genero, duracion, clasificacion, sinopsis }) => {
  return (
    <div className={`pelicula-card ${getColorByClassificacion(clasificacion)}`}>
      <div className="clasificacion-badge">{clasificacion}</div>
      <h3>{titulo}</h3>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Duración:</strong> {duracion} min</p>
      <p><strong>Sinopsis:</strong> {sinopsis}</p>
    </div>
  );
};

PeliculaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  clasificacion: PropTypes.oneOf(['TE', '+14', '+18']).isRequired,
  sinopsis: PropTypes.string.isRequired,
};

export default PeliculaCard;