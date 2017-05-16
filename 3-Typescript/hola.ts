/**
 * Created by Victor on 16/5/2017.
 */
let holaMundo =`Que tal mundo cruel`;

console.log(holaMundo);

let soltero:boolean = true;

let decimal:number = 6.8;

let color:string = "blue";
let frasetion = "You're done";

let otraFrase=`El numero de novias es ${decimal+1}`;

let notas:number[]=[1,2,34];
let jaladas:Array<number> = [1,2,3,4];

let nombre:any = "asd";
nombre=12;

let usuario: UsuarioLogin = {
    nombre:"david",
    apellido:"garzon",
    direccion:"talvez"
}


interface UsuarioLogin {
    nombre:string,
    apellido:string
    direccion?:string
}
//los ? u atributos opcionales solo van al final
class Persona{
    nombre:string ="Usu"; //publico por defecto
    apellido:string;
    fechaNacimiento:Date;
    constructor(nombre?:string,apellido?:string,fechaNacimiento?:Date){
    }

    imprimirPersona(){
        console.log(this.nombre, this.apellido);
        this.imprimirNombre()
        return {
            nombre:this.nombre,
            apellido:this.apellido
        }
    }

    private imprimirNombre(nombre?:string,apellido?:string):void{

        if(apellido){
            console.log(nombre,apellido);
        }else{
            console.log(nombre);
        }
    }

}

function SumarNumeros(numero1:number,numero2:number):number{
    return numero1+numero2;
}

let adrian:Persona = new Persona();

console.log(adrian.nombre, adrian.apellido, adrian.fechaNacimiento);

adrian.nombre="David";
adrian.apellido="Garzon";
adrian.fechaNacimiento= new Date("1280-04-02");
//console.log(adrian)

adrian.imprimirPersona();