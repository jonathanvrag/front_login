import { useForm } from 'react-hook-form';
import './FormLogin.css';

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='formLogin'>
      <h1>LOGIN</h1>
      <form className='formLogin__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('usuario', {
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
        {errors.usuario && <p>{errors.usuario.message}</p>}
        <input
          {...register('contraseña', {
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
        {errors.contraseña && <p>{errors.contraseña.message}</p>}
        <button className='formLogin__form-button' type='submit'>
          Iniciar sesión
        </button>
      </form>
      <a className='formLogin__recover' href='/recuperar'>
        ¿Olvidaste tu usuario o contraseña?
      </a>
    </div>
  );
}
