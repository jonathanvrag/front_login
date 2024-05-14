import './FormLogin.css';

export default function FormLogin() {
  return (
    <div className='formLogin'>
      <h1>LOGIN</h1>
      <form className='formLogin__form'>
        <input
          className='formLogin__form-input'
          type='text'
          name='usuario'
          placeholder='Usuario'
        />
        <input
          className='formLogin__form-input'
          type='password'
          name='contraseña'
          placeholder='Contraseña'
        />
        <button className='formLogin__form-button'>Iniciar sesión</button>
      </form>
      <a className='formLogin__recover' href='/recuperar'>¿Olvidaste tu usuario o contraseña?</a>
    </div>
  );
}
