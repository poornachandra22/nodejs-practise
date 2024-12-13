const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 }
];

// API to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  
  // Add the new user to the array
  users.push(newUser);
  
  // Return the new user with a success status
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  // Responding with the entire users array
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
