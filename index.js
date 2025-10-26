// Create a simple web app that returns IP address

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ipAddress = req.ip;
  res.send(`Your IP Address is: ${ipAddress}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});