// server.js or routes.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());

// Dashboard - single user data
app.get('/api/user', (req, res) => {
  fs.readFile('./data/user.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send("Error reading user data");
    res.json(JSON.parse(data));
  });
});

// Leaderboard - multiple users
app.get('/api/leaderboard', (req, res) => {
  fs.readFile('./data/leaderboard.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send("Error reading leaderboard data");
    res.json(JSON.parse(data));
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
