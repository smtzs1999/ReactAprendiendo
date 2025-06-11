import '../../css/botones.css';

export const BotonCerrarSesion = ({ className = ''}) => {
  return (
    
      <button className={`boton-iniciar btn btn-danger w-auto text-center ${className}`}>

        <span className="ms-2">Iniciar Sesion</span>
      </button>

  );
};
