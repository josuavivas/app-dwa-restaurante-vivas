const express = require("express");
const app = express();


const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server Restaurante corriendo en e puerto ${port}`);
});


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

//Helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});


app.set('view engine','hbs');

app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Josua',
        anio: new Date().getFullYear()
    });
});
