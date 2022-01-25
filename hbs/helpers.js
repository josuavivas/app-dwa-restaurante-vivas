const hbs = require ('hbs');
const fs = require('fs');
const producto = JSON.parse(fs.readFileSync('./data/datos.json'));

hbs.registerHelper('getProductos',function(){
    var prod = "";
    producto.forEach(element => {

  
        prod += '<div class="menu-comidas-item">';
        
        prod += '<img src="'+element.url+ '"class="img-plato">';
        prod += '<h3>'+ element.nombre +'</h3>';
        prod += '<a class="precio-plato">' +"$ "+ element.precio +'</a>';
        prod += '<p class="desc-plato">' + element.descripcion +'</p>';
        prod +='<br>'
        prod +='<a href="#" class="boton boton-color">'+"Ordenar"+'</a>'
        prod +='<div class="limpiar">'
        prod +='</div>'
        prod += '</div>';
        

    });
    return new hbs.SafeString(prod);
})