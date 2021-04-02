// import express
const express = require('express');
// instantiate express
const app = express();
// import node-fetch
const fetch = require('node-fetch');
// software version number
const version = "1.0.0";


app.get('/proxy', (req, res) => {
    (async () => {
        const response = await fetch('https://app.scrapingbee.com/api/v1?api_key=0G7R0MGKCQ72SEZLKADQYJW6HULSCI2XP1WRKNGR28LE22FMOZ19WK21AEEXO5Y3WI1BIF4ETTBWSQ6Y&custom_google=True&url=https://www.google.com');
        const body = await response.text();
        console.log(body);
    })();
});



// define which port to listen on
const port = 5000;

// listen to a port and start web server
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on ${port}!`);
  }
});