const http = new EasyHTTP;

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));

// User data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Create user
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Update user
http.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Delete user
http.put('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(error => console.log(error));



