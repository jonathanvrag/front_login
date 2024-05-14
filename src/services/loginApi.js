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
