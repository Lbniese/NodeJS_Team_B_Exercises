// import express
const express = require('express');
// instantiate express
const app = express();
// define which port to listen on
const port = 5000;

app.get('/', (req, res) => {
    res.send({​​}​​);
});

app.get('/me', (req, res) => {
  res.send({ name: 'Lukas' });
});

// listen to a port and start web server
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on ${port}!`);
  }
});