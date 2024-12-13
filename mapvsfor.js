const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 }
];

// Using map
app.get('/users/mapNames', (req, res) => {
  const names = users.map(user => user.name);
  res.json(names);
});

// Using for loop
app.get('/users/forNames', (req, res) => {
  const names = [];
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
  res.json(names);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
