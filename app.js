//requieres de path y express
const express = require ('express');
const path = require('path');

//se llama a la función de express y guardo los objetos en app
const app = express();

//indico a express mi carpeta con contenido estático (public)
publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//inicializo la escucha en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

//respuesta a get para /home
app.get('/home', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});