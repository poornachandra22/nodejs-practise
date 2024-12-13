const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Brown', age: 35 }
];

// API to check if any user is above 30
app.get('/users/anyAbove30', (req, res) => {
  // Using .some() to check if any user has age greater than 30
  const anyAbove30 = users.some(user => user.age > 30);
  
  res.json({ anyAbove30 });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
