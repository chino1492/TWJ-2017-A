/**
 * Created by Victor on 9/5/2017.
 */

var conhambre={}; //Instanciar un objeto vacio

if(conhambre){
    console.log("Como");
}else{
    console.log("Trabajar");
}

var numero=5;

switch(numero){

    case 1:
        console.log("Es uno");
         break;

    default:
        console.log("No es uno");
}

var david={

    nombre:'David',
    apellido:'Garzon',
    fechaNacimiento: new Date(),
    imprimir: function(){
        console.log(this.nombre, this.apellido); //poner una function en un objeto
    },
    anio:function () {
        return this.fechaNacimiento;
    },
    diferenciaEdad:function (edadAComparar){
        return (this.fechaNacimiento.getFullYear()-edadAComparar);
    }
};

david.imprimir();
console.log(david.anio());
console.log(david.diferenciaEdad(2000));