const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

/*"morgan" (en este caso nos ayuda a acotar de dónde viene el error) )es una dependencia de desarrollo, 
no se utiliza cuando el servidor esta en desarrollo porque debería dar más información de la necesaria.*/
app.use(morgan('dev'));
/*El "app.use" sirve para añadir " "mideluers?"capas a nuestra aplicación, capas que procesaran 
las peticiones y que les harán alguna modificación o revisaran algún dato*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
Verbos HTTP (denotan una accion en particular)
GET - obtener recurso (ejecuta en los navegadores cada vez que ponemos una direccion URL, regresan una pagina Web)
POST - guardar y/o publicar algo - almacenar/crear recursos
PATCH - actualizacion de datos de un recurso especifico - modificar una parte de un recurso
PUT - actualizacion de todos los elementos de datos - modificar un recurso
DELETE - eliminar un recurso/registro de una base de datos 
*/

app.get("/", (req, res, next) => {
    return res.status(200).json({code: 1, message: "Bienvenido al Pokedex"});
});

app.use("/pokemon", pokemon);

app.use((req, res, next) => {
    return res.status(404).json({code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, () => {
    //"||" representa un <<or>>, si existe un valor poner un de los valores u otro que se mencione.
    console.log("Server is running...");
});