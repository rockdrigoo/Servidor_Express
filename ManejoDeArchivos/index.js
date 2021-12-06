const { info } = require('console');
const fs = require('fs');
fs.writeFileSync('archivo.txt', "Hola, este es un archivo nuevo, creado de manera sincrónica");
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {
    if (err)
        console.log(err);
    else {
    }
});

let informacion = fs.readFileSync('infor.txt', 'utf8');
console.log(informacion);

fs.unlinkSync('archivo.txt');