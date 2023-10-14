//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth = require('./config/middleware/auth');
const notFound = require('./config/middleware/notFound');
const index = require('./config/middleware/index');
const cors = require('./config/middleware/cors');

app.use(cors);
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

app.get("/", index);
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    //"||" representa un <<or>>, si existe un valor poner un de los valores u otro que se mencione.
    console.log("Server is running...");
});