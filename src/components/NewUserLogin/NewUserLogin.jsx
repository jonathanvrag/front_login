import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './NewUserLogin.css';

export default function NewUserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    navigate('/');
  };

  return (
    <div className='newUserLogin'>
      <h1>Nuevo usuario</h1>
      <form className='newUserLogin__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='newUserLogin__form-input'
          id='name'
          {...register('name', {
            required: 'Este campo es requerido',
            minLength: {
              value: 4,
              message: 'El nombre debe tener al menos 4 caracteres',
            },
          })}
          placeholder='Nombre'
        />
        {errors.name && (
          <span className='newUserLogin__form-span'>
            Este campo es requerido
          </span>
        )}
        <input
          className='newUserLogin__form-input'
          id='lastname'
          {...register('lastname', {
            required: 'Este campo es requerido',
            minLength: {
              value: 4,
              message: 'El apellido debe tener al menos 4 caracteres',
            },
          })}
          placeholder='Apellido'
        />
        {errors.lastname && (
          <span className='newUserLogin__form-span'>
            Este campo es requerido
          </span>
        )}
        <input
          className='newUserLogin__form-input'
          id='user'
          {...register('user', {
            required: 'Este campo es requerido',
            minLength: {
              value: 4,
              message: 'El nombre debe tener al menos 4 caracteres',
            },
          })}
          placeholder='Usuario'
        />
        {errors.user && (
          <span className='newUserLogin__form-span'>
            Este campo es requerido
          </span>
        )}
        <input
          className='newUserLogin__form-input'
          id='pass'
          type='password'
          {...register('pass', {
            required: 'Este campo es requerido',
            minLength: {
              value: 4,
              message: 'El nombre debe tener al menos 4 caracteres',
            },
          })}
          placeholder='Contraseña'
        />
        {errors.pass && (
          <span className='newUserLogin__form-span'>
            Este campo es requerido
          </span>
        )}
        <input
          className='newUserLogin__form-input'
          id='confirmPass'
          type='password'
          {...register('confirmPass', {
            required: true,
            validate: value =>
              value === watch('pass') || 'Las contraseñas no coinciden',
          })}
          placeholder='Confirmar Contraseña'
        />
        {errors.confirmPass && (
          <span className='newUserLogin__form-span'>
            {errors.confirmPass.message}
          </span>
        )}
        <div className='newUserLogin__form-buttons'>
          <button className='newUserLogin__form-buttons-button' type='submit'>
            Registrarse
          </button>
          <button className='newUserLogin__form-buttons-button'>Volver</button>
        </div>
      </form>
    </div>
  );
}
