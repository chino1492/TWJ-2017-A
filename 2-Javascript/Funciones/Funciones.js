/**
 * Created by Victor on 3/5/2017.
 */

function holaMundo() {
    console.log('Hola Mundo');
}

holaMundo();

//El double de una entero

function doble(numero) {
    return numero*2;
}

console.log(doble(2));

var hola = function () {
    console.log('hola');
}

hola();

function hazAlgo(algo) {
    algo();
}

hazAlgo(function(){ console.log('hola')});

function transformarNumero(numero,transformacion) {
    transformacion(numero);
}

transformarNumero(5,function (numero) {
    return numero*2;
})

transformarNumero(8,function (numero) {
    return numero/2;
})