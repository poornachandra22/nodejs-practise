const express = require('express'); // Importing Express framework
const app = express(); // Creating an Express application instance
const port = 3000; // Defining the port for the server

// Example list of JSON objects (could be users, products, etc.)
const users = [
  { id: 1, name: 'John Doe', age: 30, role: 'Admin' },
  { id: 2, name: 'Jane Doe', age: 25, role: 'User' },
  { id: 3, name: 'Bob Smith', age: 40, role: 'Manager' },
  { id: 4, name: 'Alice Johnson', age: 35, role: 'Admin' }
];

// Middleware to parse JSON bodies
app.use(express.json());

// API to get all objects (GET request)
app.get('/users', (req, res) => {
  res.json(users);
});

// API to get one object by id (GET request with parameter)
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id); // Extracting the id from the request parameters
  const user = users.find(user => user.id === id); // Searching for the user by ID
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' }); // If not found, return 404
  }

  res.json(user); // Return the user as JSON
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





// API to calculate the total age of all users
app.get('/users/totalAge', (req, res) => {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    res.json({ totalAge });
  });
//   The reduce function takes all users and calculates the sum of their ages.







// API to get users by role
app.get('/users/role/:role', (req, res) => {
    const role = req.params.role;
    const filteredUsers = users.filter(user => user.role === role);
    
    if (filteredUsers.length === 0) {
      return res.status(404).json({ message: 'No users found with that role' });
    }
  
    res.json(filteredUsers);
  });
//   The filter function returns only those users whose role matches the role passed as a parameter.









// API to get only user names and roles (exclude other data)
app.get('/users/namesAndRoles', (req, res) => {
    const mappedUsers = users.map(user => ({
      name: user.name,
      role: user.role
    }));
    
    res.json(mappedUsers);
  });
//   The map function transforms the list of users to only include names and roles, ignoring other fields like age or id.