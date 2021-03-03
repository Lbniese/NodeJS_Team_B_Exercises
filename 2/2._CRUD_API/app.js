// import express
const express = require('express');
// instantiate express
const app = express();
// server port to listen to
const port = 5000;
// use body-parser
app.use(express.json());

// hardcoded data with phone numbers
/*
const data = [
  { id: 1, name: 'Lukas', phoneNumber: '72770033', },
  { id: 2, name: 'Mikkel', phoneNumber: '24243314', },
  { id: 3, name: 'Peter', phoneNumber: '54124312', },
  { id: 4, name: 'Henrik', phoneNumber: '24243122', },
  { id: 5, name: 'Bo', phoneNumber: '65343418', },
  { id: 6, name: 'Ole', phoneNumber: '49473434', },
  { id: 8, name: 'Michael', phoneNumber: '40878239', },
  { id: 9, name: 'Bo', phoneNumber: '80878211', },
  { id: 10, name: 'Arne', phoneNumber: '60603922', },
];
*/
// hardcoded data without phone numbers
const data = [
  { id: 1, name: 'Lukas', },
  { id: 2, name: 'Mikkel', },
  { id: 3, name: 'Peter', },
  { id: 4, name: 'Henrik', },
  { id: 5, name: 'Bo', },
  { id: 6, name: 'Ole', },
  { id: 8, name: 'Michael', },
  { id: 9, name: 'Bo', },
  { id: 10, name: 'Arne', },
];

// homepage with welcome message
app.get('/', (req, res) => {
  res.send({
    message:
      'Welcome to the /people CRUD API!',
  });
});

// READ - Fetch all People
app.get('/people', (req, res) => {
  // res.send(data);
  res.status(200).json(data);
});

// READ - Fetch by ID
app.get('/people/:id', (req, res) => {
  // find an object from data array match by id
  let peopleList = data.find((item) => {
    return item.id == req.params.id;
  });

  // if object exists/is found then return an object else return 404 status code
  if (peopleList) {
    res.status(200).json(peopleList);
  } else {
    res.sendStatus(404);
  }
});

// DELETE - Delete by ID
app.delete('/people/:id', (req, res) => {
  const itemIndex = data.findIndex(({ id }) => id == req.params.id);
  if (itemIndex >= 0) {
    data.splice(itemIndex, 1);
  }

 res.sendStatus(204);

});

// CREATE - adds new object to data array
app.post('/people/', (req, res) => {
  // get items from data array
  let itemIds = data.map(item => item.id);
  
  // create new id (find max of itemIds and +1)
  let newId = itemIds.length  > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  // console.log("newId : ", newId);
 
  // console.log("req.body.name: ", req.body.name);

  //create object of new item
  let newItem = { id: newId, name: req.body.name};

  // console.log("new item: ", newItem);

  // push new item object to data array
  data.push(newItem);

  res.status(201).json(newItem);
});

// UPDATE - Update existing person by ID
// gets id and name from api end-point of item to update
app.put('/people/:id', (req, res) => {
  // get item object match by id
  let itemObj = data.find(item => {
    return item.id == req.params.id;
  });

  // we check if item is found
  if (itemObj) {
    let newObj = {
      id: itemObj.id,
      name: req.body.name,
    };

    // find index of object from array of data
    let targetIndex = data.indexOf(itemObj);

    // replace object from data list with updated object
    data.splice(targetIndex, 1, newObj);

    // return status code 204 if success otherwise return not found 404 status code
    res.sendStatus(204);
  } else {
    res.sendStauts(404);
  }

});

// listen to a port
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on ${port}!`);
  }
});
