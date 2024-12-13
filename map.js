const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 }
];

// API to get only user names
app.get('/users/names', (req, res) => {
  // Using map to create an array of user names
  const userNames = users.map(user => user.name);
  
  res.json(userNames);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
