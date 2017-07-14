
function contarPalabras(texto){
var texto= "El mundo es ancho y ajeno"
var array = texto.split(" ");
var resultado = array.length;
document.writeln(" * El texto tiene " +resultado+ " palabra(s)");
}
contarPalabras();
