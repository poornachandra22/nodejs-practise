// Importing express to create the server

// const express = require('express');
import express from 'express';

const app = express();

const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 }
];

// API to get a single user by id
app.get('/users/:id', (req, res) => {
  // Extracting the ID from request parameters
  const id = parseInt(req.params.id);
  
  // Using the find method to locate the user with the given ID
  const user = users.find(user => user.id === id);
  
  // If no user is found, return a 404 response
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // If found, return the user object
  res.json(user);
});

// Running the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
