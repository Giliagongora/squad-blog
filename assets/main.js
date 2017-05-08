function Squad(nombre, apellido, edad, hobbies, hobbies1, hobbies2){
	this.nombre =  nombre ;
	this.apellido = apellido ;
	this.edad = edad ;
	this.hobbies =  hobbies;
	this.hobbies1 =  hobbies1;
	this.hobbies2 =  hobbies2;

}

var val = new Squad("Valentina", "Lopez", 25, "Tarot","Idiomas", "Peliculas mudas");
var trini = new Squad("Trinidad", "Fuentes", 26, "video juegos", "PugLover","Dormir");
var diana = new Squad("Diana", "Monsalve", 29, "Hacer scratch", "Musica","Negocios");
var pez = new Squad("Maria Paz", "Rojas", 26, "Música", "Comer", "Hablar ingles");
var maribel = new Squad("Maribel", "Diaz", 28, "Salir a tomar café y comer muffins", "El silencio", "Escribir");
var vale = new Squad("Valentina", "Toledo", 20, "jugar fútbol", "Música", "Actividades al aire libre");
var dani= new Squad("Daniela", "Sanchez", 24, "Escuchar música", "Cantar", "Ver series");
var kari = new Squad("Karina", "Palacios", 24, "Ver series", "Compartir con amigos", "Leer y escuchar musica");
var gilia= new Squad("Gilia", "Góngora", 28, "Escuchar música", "Escribir", "Soñar");


var revelarval = document.getElementById("val");
var revelartrini = document.getElementById("trini");
var revelardiana = document.getElementById("diana");
var revelarpez = document.getElementById("pez");
var revelarmaribel = document.getElementById("maribel");
var revelarvale = document.getElementById("vale");
var revelardani = document.getElementById("dani");
var revelarkari = document.getElementById("kari");
var revelargilia = document.getElementById("gilia");


revelarval.innerHTML = " <strong>Nombre: </strong> " + val.nombre + " " + val.apellido +
"<br> <strong>Edad: </strong>" + val.edad +"<br> <strong>Hobbies: </strong> <li>" + val.hobbies + 
"</li><li>" + val.hobbies1 + "</li><li>" + val.hobbies2 + "</li>" ;

revelartrini.innerHTML = " <strong>Nombre: </strong> " + trini.nombre + " " + trini.apellido +
"<br> <strong>Edad: </strong>" + trini.edad +"<br> <strong>Hobbies: </strong> <li>" + trini.hobbies + 
"</li><li>" + trini.hobbies1 + "</li><li>" + trini.hobbies2 + "</li>";

revelardiana.innerHTML = "<strong>Nombre: </strong> " + diana.nombre + " " + diana.apellido +
"<br> <strong>Edad: </strong>" + diana.edad +"<br> <strong>Hobbies: </strong> <li>" + diana.hobbies + 
"</li><li>" + diana.hobbies1 + "</li><li>" + diana.hobbies2 + "</li>";

revelarpez.innerHTML = " <strong>Nombre: </strong> " + pez.nombre + " " + pez.apellido +
"<br> <strong>Edad: </strong>" + pez.edad +"<br> <strong>Hobbies: </strong> <li>" + pez.hobbies + 
"</li><li>" + pez.hobbies1 + "</li><li>" + pez.hobbies2 + "</li>";

revelarmaribel.innerHTML = " <strong>Nombre: </strong> " + maribel.nombre + " " + maribel.apellido +
"<br> <strong>Edad: </strong>" + maribel.edad +"<br> <strong>Hobbies: </strong> <li>" + maribel.hobbies + 
"</li><li>" + maribel.hobbies1 + "</li><li>" + maribel.hobbies2 + "</li>";

revelarvale.innerHTML = " <strong>Nombre: </strong> " + vale.nombre + " " + vale.apellido +
"<br> <strong>Edad: </strong>" + vale.edad +"<br> <strong>Hobbies: </strong> <li>" + vale.hobbies + 
"</li><li>" + vale.hobbies1 + "</li><li>" + vale.hobbies2 + "</li>";

revelardani.innerHTML = " <strong>Nombre: </strong> " + dani.nombre + " " + dani.apellido +
"<br> <strong>Edad: </strong>" + dani.edad +"<br> <strong>Hobbies: </strong> <li>" + dani.hobbies + 
"</li><li>" + dani.hobbies1 + "</li><li>" + dani.hobbies2 + "</li>";

revelarkari.innerHTML = " <strong>Nombre: </strong> " + kari.nombre + " " + kari.apellido +
"<br> <strong>Edad: </strong>" + kari.edad +"<br> <strong>Hobbies: </strong> <li>" + kari.hobbies + 
"</li><li>" + kari.hobbies1 + "</li><li>" + kari.hobbies2 + "</li>";

revelargilia.innerHTML = " <strong>Nombre: </strong> " + gilia.nombre + " " + gilia.apellido +
"<br> <strong>Edad: </strong>" + gilia.edad +"<br> <strong>Hobbies: </strong> <li>" + gilia.hobbies + 
"</li><li>" + gilia.hobbies1 + "</li><li>" + gilia.hobbies2 + "</li>";

/*
function comentar(){
	var text = document.getElementById("coment");
	var contTex = document.getElementById("sumarTexto");
	contTex[0].innerHTML +=  text.value +"<br>";
	text.value = "";
}
*/


function comentar(){
    var contTex = document.getElementById("sumarTexto","sumarTexto1","sumarTexto2");
    var text = document.getElementById("coment");
    
    contTex.innerHTML +=  text.value +"<br>";
    text.innerHTML += contTex.value;
    text.value = "";
}





/*Valentina Lopez 25 tarot, idiomas, peliculas mudas

Trinidad Fuentes 26 video juegos, pugLover, dormir

Diana Monsalve 29  hacer scratch, musica, negocios

Daniela Sanchez 24 escuchar musica, cantar, ver series

Maria Paz Rojas 26 musica, comer, hablar ingles

Gilia Gongora 28 

Maribel Diaz 28 salir a tomar café y comer muffins , el silencio y escribir

Valentina Toledo, 20, jugar fútbol, música, actividades al aire libre.

Karina Palacios, 24, Ver series, compartir con amigos, leer y escuchar musica

Valentina Toledo, 20, jugar fútbol, música, actividades al aire libre.
*/