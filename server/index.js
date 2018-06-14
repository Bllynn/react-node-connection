const express = require('express');
const bodyParser = require('body-parser');

const port = 3005;

const app = express();

app.use(bodyParser.json());

let people = [{ name: 'Todd', age: 26, id: 1 }];
let count = 2;

app.get('/api/people', (request, response) => {
  response.status(200).send(people);
});

app.post('/api/people', (request, response) => {
  const { body: person } = request;
  person.id = count++;
  people.push(person);
  response.send(people);
});

app.delete('/api/people/:id', (request, response) => {
  const { id } = request.params;
  people = people.filter(person => person.id !== +id);
  response.send(people);
});

app.listen(port, () => {
  console.log(`Docked at port ${port}`);
});
