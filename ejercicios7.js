//que aparescas los multiplos de un numero
function ejercicio7(arreglo, numero)
{
	var  resultado =[];
	//forEach solo recibe un parametro
	arreglo.forEach(function (a){
		if( a%numero == 0)
		{
			//push va mandar los parametros con comas
			resultado.push(a); //push agrega mas elementos al final de un array
		}
	});
	return resultado;
}

document.write(ejercicio7([7,21,44,80,77,35],7));
//AGREGAR SUS FUNCIONES