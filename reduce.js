const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 }
];

// API to calculate the total age of all users
app.get('/users/totalAge', (req, res) => {
  // Using reduce to calculate the total age
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  
  // Responding with the total age
  res.json({ totalAge });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
