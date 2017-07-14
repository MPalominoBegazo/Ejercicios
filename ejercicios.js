//AGREGAR SUS FUNCIONES
function Ejercicio2(n){

  var capicua = n.toString().split("").reverse().toString().replace(/,/g,"");
  var c = n.toString();

  if(c == capicua){
    return "Es capicua"
  } else{
    return "No es capicua"
  }
}
Ejercicio2(989);
