import PropTypes from 'prop-types';
import '../styles/Filtroclasificacion.css';

const Filtroclasificacion = ({ 
  clasificacionActiva, 
  onClasificacionChange, 
  busqueda, 
  onBusquedaChange,
  maxLongitudTitulo
}) => {
  const clasificaciones = ['Todos', '+14', '+18'];

  return (
    <div className="filtro-container">
      <div className="filtro-section">
        <h2>Filtrar por Clasificación</h2>
        <div className="botones-clasificacion">
          {clasificaciones.map((clasificacion) => (
            <button
              key={clasificacion}
              className={`boton-clasificacion ${
                clasificacionActiva === clasificacion ? 'activo' : ''
              }`}
              onClick={() => onClasificacionChange(clasificacion)}
            >
              {clasificacion}
            </button>
          ))}
        </div>
      </div>

      <div className="filtro-section">
        <h2>Buscar por Título</h2>
        <input
          type="text"
          placeholder="Ingresa el nombre de la película..."
          value={busqueda}
          onChange={(e) => onBusquedaChange(e.target.value.slice(0, maxLongitudTitulo))}
          maxLength={maxLongitudTitulo}
          className="buscador-input"
        />
        <p className="caracteres-info">
          {busqueda.length}/{maxLongitudTitulo} caracteres
        </p>
      </div>
    </div>
  );
};

Filtroclasificacion.propTypes = {
  clasificacionActiva: PropTypes.string.isRequired,
  onClasificacionChange: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  onBusquedaChange: PropTypes.func.isRequired,
  maxLongitudTitulo: PropTypes.number.isRequired,
};

export default Filtroclasificacion;

