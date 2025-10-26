// Create a simple web app that returns IP address

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ipAddress = req.headers?.host;
  res.send(`Your IP Address is: ${ipAddress}`);
});

app.listen(10000, () => {
  console.log('Server is running on http://localhost:10000');

});

