//AGREGAR SUS FUNCIONES




//EJERCICIO6
function numero(n) {
 
    if (n == n.split("").reverse().join("")){
      return "es capicua";
    } else {
      return "no es capicua";
    }
  
}
console.log(numero(("112211")));
