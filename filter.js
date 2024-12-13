const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', role: 'Admin', age: 25 },
  { id: 2, name: 'Jane Smith', role: 'User', age: 30 },
  { id: 3, name: 'Emily Johnson', role: 'Admin', age: 28 }
];

// API to get users by role
app.get('/users/role/:role', (req, res) => {
  const role = req.params.role;
  
  // Using filter to get users with the specified role
  const filteredUsers = users.filter(user => user.role === role);
  
  res.json(filteredUsers);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
