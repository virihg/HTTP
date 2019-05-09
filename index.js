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

app.get('/suma', (request, response) => {
  const numero1 = request.query.numero1;
  const numero2 = request.query.numero2;
  const suma = suma_numeros(numero1,numero2);
  response.send("la suma es " + suma);
  

  function suma_numeros(num1,num2){
    let sumanumeros = parseInt(num1, 10) + parseInt(num2, 10);
    return sumanumeros;
    console.log(sumanumeros);
  }

});



app.listen(port, () => console.log('El servidor esta corriendo'));
