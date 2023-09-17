const express = require('express');
const app = express();

/*
Verbos HTTP (denotan una accion en particular)
GET - obtener recurso (ejecuta en los navegadores cada vez que ponemos una direccion URL, regresan una pagina Web)
POST - guardar y/o publicar algo 
PATCH - actualizacion de datos de un recurso especifico 
PUT - actualizacion de todos los elementos de datos  
DELETE - eliminar un recurso/registro de una base de datos 
*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000, () => {
    console.log("Server is running...");
});