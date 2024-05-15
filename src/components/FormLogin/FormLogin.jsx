import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './FormLogin.css';
import { getLoginApi } from '../../services/loginApi';
import { useEffect, useState } from 'react';

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getLoginApi().then(data => setUsers(data));
  }, []);

  const onSubmit = data => {
    const user = users.find(user => user.user === data.user);
    if (!user) {
      alert('El usuario no existe');
    } else if (user.pass !== data.pass) {
      alert('La contraseña no es correcta');
    } else {
      setLoading(true);
      setTimeout(() => {
        navigate('/successful-login', { state: { user } });
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className='formLogin'>
      <h1>LOGIN</h1>
      <form className='formLogin__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('user', {
            required: 'El campo usuario es requerido',
            minLength: {
              value: 4,
              message: 'El usuario debe tener al menos 4 caracteres',
            },
          })}
          className='formLogin__form-input'
          type='text'
          placeholder='Usuario'
        />
        {errors.user && <p>{errors.user.message}</p>}
        <input
          {...register('pass', {
            required: 'El campo contraseña es requerido',
            minLength: {
              value: 4,
              message: 'La contraseña debe tener al menos 4 caracteres',
            },
          })}
          className='formLogin__form-input'
          type='password'
          placeholder='Contraseña'
        />
        {errors.pass && <p>{errors.pass.message}</p>}
        <a className='formLogin__form-recover' href='/recuperar'>
          ¿Olvidaste tu usuario o contraseña?
        </a>
        <button
          className={`formLogin__form-button ${loading ? 'loading' : ''}`}
          type='submit'>
          {loading ? (
            <span className='formLogin__form-loader'></span>
          ) : (
            'Iniciar sesión'
          )}
        </button>
      </form>
      <p className='formLogin__register'>
        No tienes una cuenta? <a href='/new-user'>Regístrate</a>
      </p>
    </div>
  );
}
