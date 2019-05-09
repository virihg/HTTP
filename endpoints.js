const express = require('express');
const services = require ("./services")
  exports.routes = (app) => {
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

    //funcion para suma de los numeros
        function suma_numeros(num1,num2){
        let sumanumeros = parseInt(num1, 10) + parseInt(num2, 10);//con parseInt porque los toma como string
        return sumanumeros;
        console.log(sumanumeros);//console log para revisar que valor trae suma
      }

    });

    // endpoint que obtiene los parametros y regresar como JSON
      app.get('/parametros', (request, response) => {
      const mascota = request.query.mascota;
      const nombre  = request.query.nombre;
      const obj = {
          mascota: mascota,
          nombre: nombre
      }
      response.json(obj);
    });

    //recibir una fecha y regresar cuantos años tiene
      app.get('/anios', (request, response) => {
      const fecha = request.query.fecha;
      const anios = calcula_años(fecha);
      console.log(anios)
      response.send("Tu edad es" + anios)

        function calcula_años(fecha){
        //const now = New Date();
        var edad = now.getFullYear() - parseInt(fecha);
        return edad;
      }
      });
      //POST

      app.post('/datos', (request, response) => {
        const postData = request.body;
        services.addId(postData);
        response.json(postData);
      });
// Get con html
      app.get('/html', (request, response) => {
        response.render("form");
      });
      app.post('/form', (request, response) => {
        const data = request.body;
        response.send(data);
      });




  }
