import PropTypes from 'prop-types';
import '../styles/PeliculaCard.css';

// aqui haremos cards de las peliculas en listapeliculas.jsx
// los props del componente son : titulo, genero, duracion, clasificacion, sinopsis, 
// debes aplicar colores segun la clasificacion de la pelicula, por ejemplo: TE = verde, +14 = amarillo, +18 = rojo
// define los tipos de props con proptypes y utiliza como contenido jsx normal

const getColorByClassificacion = (clasificacion) => {
  switch (clasificacion) {
    case 'TE':
      return 'clasificacion-te';
    case '+14':
      return 'clasificacion-mas14';
    case '+18':
      return 'clasificacion-mas18';
    default:
      return 'clasificacion-default';
  }
};

const PeliculaCard = ({ titulo, genero, duracion, clasificacion, sinopsis }) => {
  return (
    <div className="pelicula-card">
      <div className={`clasificacion-badge ${getColorByClassificacion(clasificacion)}`}>
        {clasificacion}
      </div>
      <div className="pelicula-content">
        <h3 className="pelicula-titulo">{titulo}</h3>
        <p className="pelicula-genero"><strong>Género:</strong> {genero}</p>
        <p className="pelicula-duracion"><strong>Duración:</strong> ⏱️ {duracion} min</p>
        <p className="pelicula-sinopsis"><strong>Sinopsis:</strong> {sinopsis}</p>
      </div>
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
