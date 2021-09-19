const express = require('express');
const app = express();
const port = 80;

app.get('/', (req,res) => {         // asi se crean las rutas 
    res.send('Hola jutiapa');  
});

app.listen(port, () =>{
console.log(`Ejemplo node js en el puerto ${port}`);
})

