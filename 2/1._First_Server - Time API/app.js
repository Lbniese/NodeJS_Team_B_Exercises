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

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// format: dd/MM/yyyy, HH.mm.ss
app.get('/time', (req, res) => {
  const time = new Date().toLocaleString();
  res.send({ time: `${time}` });
});

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
app.get('/day', (req, res) => {
  const dayNum = new Date().toLocaleDateString('default', { day: 'numeric' });
  const dayName = new Date().toLocaleDateString('default', { weekday: 'long' });
  // const day = new Date().getDay();
  res.send({ number: `${dayNum}`, name: `${dayName}` });
});

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
app.get('/month', (req, res) => {
  const month = new Date().toLocaleDateString('default', { month: 'long' });
  res.send({ month: `${month}` });
});

// create a route called about that serves a hardcoded version number in a string
app.get('/about', (req, res) => {
  res.send({version: `${version}`});
})

app.get('/page', (req, res) => {
  res.send("<h1></h1>");
})

const failures = ["mislick", "falling down", "skateboard accident", "tiktok fail"];

// loop through this array using map print out each element
// failures.map((failure, index) => console.log(failure, index));

const newFailures = failures.map((failure) => {
  return { failure, hilarityLevel: 5};
});

// failures[1] = "Charlie Chaplin fall";

console.log(newFailures.slice());

// listen to a port and start web server
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on ${port}!`);
  }
});
