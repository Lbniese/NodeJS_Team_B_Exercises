//import express
const express = require("express");
// instantiate express
const app = express();

// hard core persons
const persons = [
  {
    id: 1,
    name: "Lukas",
  },
  {
    id: 2,
    name: "Mikkel",
  },
  {
    id: 3,
    name: "Peter",
  },
];

app.get("/", (req, res) => {
  res.send({
    message:
      "Visit /persons for all persons or /persons/id for specific person",
  });
});

app.get("/persons", (req, res) => {
  res.send(persons);
});

app.get("/persons/:id", (req, res) => {
  let personsList = persons.filter((person) => person.id == req.params.id);
  res.send(personsList);
});

//listen to port 5000
app.listen(5000);
