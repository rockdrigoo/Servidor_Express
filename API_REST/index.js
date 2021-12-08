var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/crearEntrada', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/crearEntrada.html'));
 });

app.post('/envioDeDatos', function (req, res) {
    usuario.nombre = req.body.nombre;
    usuario.apellido = req.body.apellido;
    usuario.id = req.body.id;
    res.sendFile(path.join(__dirname + '/html/index.html'));
 });

app.get('/consultarDatos', function (req, res) {
    if (usuario.nombre !== '' && usuario.apellido !== '' && usuario.id !== ''){
       res.json(usuario);
    } else {
       res.send("Datos no ingresados");
    }
});

app.get('/eliminarDatos', function (req, res) {
    if (usuario.nombre !== '' && usuario.apellido !== '' && usuario.id !== '') {
       usuario.nombre = '';
       usuario.apellido = '';
       usuario.id = '';
       res.sendFile(path.join(__dirname + '/html/datosEliminados.html'));
    } else {
       res.send("Datos no ingresado");
    }
 });

app.listen(8000, function () {
   console.log('Servidor corriendo en el puerto 8000');
});

var usuario = {
    nombre: '',
    apellido: '',
    id: ''
 };