import { useLocation, useNavigate } from 'react-router-dom';
import './SuccessfulLogin.css';

export default function SuccessfulLogin() {
  const location = useLocation();
  const data = location.state.user;
  const navigate = useNavigate();

  const logout = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className='successfulLogin'>
      <h1>
        Hola {data.name} {data.lastname}!
      </h1>
      <h2>Has iniciado sesión exitosamente.</h2>
      <button className='successfulLogin__button' onClick={logout}>
        Salir
      </button>
    </div>
  );
}
