const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Brown', age: 35, email: 'alice@example.com' }
];

// API to check if any user has a specific key
app.get('/users/hasKey/:key', (req, res) => {
  const key = req.params.key;
  
  // Check if any user object has the specified key
  const hasKey = users.some(user => key in user);
  
  res.json({ hasKey });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
