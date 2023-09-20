//agregar articulo 
function nuevoArticulo(){
        function Noticia(titular, texto, categoria){
            this.titular=titular;
            this.texto=texto;
            this.categoria=categoria;
        }
        var getTitular = document.getElementById("titular").value;
        var getTexto = document.getElementById("texto").value;
        var getCategoria = document.getElementById("categoria").value;

        nuevoNoticia = new Noticia(getTitular, getTexto, getCategoria);
        agregar();
}

const baseDatos=[];

function agregar(){
    baseDatos.push(nuevoNoticia);
    document.getElementById("noticia").innerHTML += '<div class="noticia"><h1>'+nuevoNoticia.titular+'</h1><hr><p>'+nuevoNoticia.texto+'</p><hr><p>Categoría: '+nuevoNoticia.categoria+'</p></div>'; 
}


//contador general
var actualizarContador =function(){   
    document.getElementById("contadorgeneral").innerHTML = '<p>Artículos totales publicados en El Faro: '+baseDatos.length+'.</p>';
}

actualizarContador();
var intervalo = setInterval(actualizarContador, 1000);


//botones categorias
function botonInicio(){
    document.getElementById("noticia").innerHTML = "";
    for(i=0; i < baseDatos.length; i++){
        document.getElementById("noticia").innerHTML += '<div class="noticia"><h1>'+baseDatos[i].titular+'</h1><hr><p>'+baseDatos[i].texto+'</p><hr><p>Categoría: '+baseDatos[i].categoria+'</p></div>'; 
    }
    document.getElementById("contadorcategoria").innerHTML = "";
}

function botonNoticias(){
    document.getElementById("noticia").innerHTML = "";
    var filtrado = baseDatos.filter(x => x.categoria == "Noticias");
    for(i=0; i < filtrado.length; i++){
        document.getElementById("noticia").innerHTML += '<div class="noticia"><h1>'+filtrado[i].titular+'</h1><hr><p>'+filtrado[i].texto+'</p><hr><p>Categoría: '+filtrado[i].categoria+'</p></div>'; 
    }
    document.getElementById("contadorcategoria").innerHTML = '<p>Artículos publicados en categoría Noticias: '+filtrado.length+'.</p>';
}

function botonDeportes(){
    document.getElementById("noticia").innerHTML = "";
    var filtrado = baseDatos.filter(x => x.categoria == "Deportes");
    for(i=0; i < filtrado.length; i++){
        document.getElementById("noticia").innerHTML += '<div class="noticia"><h1>'+filtrado[i].titular+'</h1><hr><p>'+filtrado[i].texto+'</p><hr><p>Categoría: '+filtrado[i].categoria+'</p></div>'; 
    }
    document.getElementById("contadorcategoria").innerHTML = '<p>Artículos publicados en categoría Deportes: '+filtrado.length+'.</p>';
}

function botonNegocios(){
    document.getElementById("noticia").innerHTML = "";
    var filtrado = baseDatos.filter(x => x.categoria == "Negocios");
    for(i=0; i < filtrado.length; i++){
        document.getElementById("noticia").innerHTML += '<div class="noticia"><h1>'+filtrado[i].titular+'</h1><hr><p>'+filtrado[i].texto+'</p><hr><p>Categoría: '+filtrado[i].categoria+'</p></div>'; 
    }
    document.getElementById("contadorcategoria").innerHTML = '<p>Artículos publicados en categoría Negocios: '+filtrado.length+'.</p>';
}