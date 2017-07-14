//AGREGAR SUS FUNCIONES

 function mili(_arr) {

    const nuevo ={
      inicio: 1,
      fin : 10,
      sumar: function (){
        var sum = 0;
        for(var i = this.inicio; i <= this.fin; i++){
          sum += i;
        }
        return sum;
      }
    }
    //holaaaa
    return nuevo.sumar();
  }