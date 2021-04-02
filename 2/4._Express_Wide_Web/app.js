// import express
const express = require('express');
// instantiate express
const app = express();
// define which port to listen on
const port = 5000;
// software version number
const version = "1.0.1";

app.get('/', (req, res) => {
    res.send({ greetings: 'Welcome' });
  });

// listen to a port and start web server
app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server listening on ${port}!`);
    }
  });