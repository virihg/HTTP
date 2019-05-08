const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
 response.send('hello world');
});

app.get('/usuario', (request, response) => {
  const usuario = {
    name: "Viridiana",
    edad: 26
  }
 response.send(usuario);
});

app.get('/usuarios', (request, response) => {
  const name = request.query.name;
  const names = name.split(",");
  console.log(names);
  const age = request.query.age;
  const ageName = age + " " + name;
  response.send(names);

});

app.delete('/borrar', (request, response) => {
   const id = request.query.id;
// aqui es donde se borra el recurso
   response.send("se borro " + id);
});


app.listen(port, () => console.log('El servidor esta corriendo'));
