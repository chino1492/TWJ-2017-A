/**
 * Created by Victor on 3/5/2017.
 */

//variables.js
/*
* En javascript se define una variable con la palabra reservada <var>*/

//ENTEROS

var dos=2;
var tres=3;
var quince=15;
var diezYSiete=17;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);

// Float

var dosPuntoCinco=2.5;

console.log(dosPuntoCinco);

//Todas las variables

var verdaderoOFalso=true;
var falso=false;
var nombre='David';
var negativo=-4;
var fechaNacimiento = new Date();
var cuatroString = undefined;
cuatroString=null;

var variable;

 console.log(variable);

 var numero2 = 2;
 console.log(typeof numero2);

 //Objetos

 var david={
     id:1,
     nombre:'David',
     createdAt: new Date(),
     updatedAt: new Date(),
     casado: true,
     prestamos:false,
     hijos:null,
     altura:1.78,
     negativo:-1,
     mascota:{
         nombre:'Bruno',
         fechaNacimiento: new Date()
     }
 };

 console.log(david.altura, "Hola");
 console.log(david.mascota.fechaNacimiento);
 console.log(david.altura);
 david.altura=1.50;
 console.log(david.altura);
 david.altura={
     ancho:2.4,
     alto:1.79
 };

 console.log(david.altura);
//borrando atributos o propiedades
 delete david.altura;

 console.log(david);

//Añandiendo atributos o propiedades al obejto

david.juegos = 'varios';
console.log(david);

var arreglo =[
    1,
    'dav',
    2.4,
    false
];

var nuevoObjeto={
    papas:['chola','chaucha','maria'],
    cebollas:['paintenia','perla','blanca']
}

var arregloObjetos=[
    {
        id:1,
        nombre:'Adrian'
    },
    {
        id:2,
        nombre:'Felipe'
    }
]

arregloObjetos.splice(0,1);

console.log(arregloObjetos);

arregloObjetos.splice(0,0,{id:3, nombre:'carmen'});

console.log(arregloObjetos);