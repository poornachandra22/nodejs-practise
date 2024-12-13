const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 }
];

// API to get all users
app.get('/users', (req, res) => {
  // Responding with the entire users array
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
