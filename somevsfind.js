const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Brown', age: 35 }
];

// Using .some() to check if any user is over 30
app.get('/users/someOver30', (req, res) => {
  const anyOver30 = users.some(user => user.age > 30);
  res.json({ anyOver30 });
});

// Using .find() to find the first user over 30
app.get('/users/findOver30', (req, res) => {
  const firstOver30 = users.find(user => user.age > 30);
  res.json(firstOver30 || { message: 'No user found' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
