//solicito el la función express y lo guardo en express
const express = require ('express');
//solicito la funcion path
const path = require ('path');

//guardo los objetos de express en app para ser accesibles
const app = express();
//guardo el path absoluto de public
const publicPath = path.resolve(__dirname, "./public");

//le digo a express que la carpeta public será estática
app.use(express.static(publicPath));

//abro la conexión con el servidor en el puerto 3000
app.listen(process.env.PORT || 3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000");
});

//por método get envío el archivo .html
app.get('/', function (req,resp) {
    resp.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/register', function (req,resp) {
    resp.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', function (req,resp) {
    resp.sendFile(path.resolve(__dirname, './views/login.html'))
});