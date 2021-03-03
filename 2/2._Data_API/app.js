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

// create a route called about that serves a hardcoded version number in a string
app.get('/about', (req, res) => {
  res.send({version: `${version}`});
})

app.get('/page', (req, res) => {
  res.send("<h1></h1>");
})

app.get('/search', (req, res) => {
  res.send({searchquery: req.query });
});

app.get('/telegram/:message', (req, res) => {
  console.log(req.params);
  res.send({params: req.params});
});

app.get('/name/:message', (req, res) => {
  //console.log('name, `${req.params}`');
  res.send('name, ' + req.params);
});

app.post('/hello', function (req, res) {
  res.send('POST')
})

// listen to a port and start web server
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on ${port}!`);
  }
});