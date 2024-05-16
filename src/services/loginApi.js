export function getLoginApi() {
  return fetch('http://localhost:3000/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => console.error('Error:', error));
}

export async function postNewUserLogin(data) {
  console.log(data);

  const response = async data => {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  if (response.status === 400) {
    throw new Error('El usuario ya existe');
  } else if (response.status === 500) {
    throw new Error('Hubo un problema y no se pudo crear el usuario');
  } else if (response.status === 201) {
    console.log('Usuario creado exitosamente');
  } else if (!response.ok) {
    throw new Error('Error al registrar el usuario');
  }

  return response;
}
