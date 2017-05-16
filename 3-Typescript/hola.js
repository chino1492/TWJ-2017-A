/**
 * Created by Victor on 16/5/2017.
 */
var holaMundo = "Que tal mundo cruel";
console.log(holaMundo);
var soltero = true;
var decimal = 6.8;
var color = "blue";
var frasetion = "You're done";
var otraFrase = "El numero de novias es " + (decimal + 1);
var notas = [1, 2, 34];
var jaladas = [1, 2, 3, 4];
var nombre = "asd";
nombre = 12;
var usuario = {
    nombre: "david",
    apellido: "garzon",
    direccion: "talvez"
};
//los ? u atributos opcionales solo van al final
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "Usu"; //publico por defecto
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
        this.imprimirNombre();
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
function SumarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
var adrian = new Persona();
console.log(adrian.nombre, adrian.apellido, adrian.fechaNacimiento);
adrian.nombre = "David";
adrian.apellido = "Garzon";
adrian.fechaNacimiento = new Date("1280-04-02");
//console.log(adrian)
adrian.imprimirPersona();
