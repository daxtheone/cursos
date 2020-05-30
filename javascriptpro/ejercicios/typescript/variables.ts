console.log('Hello, TypeScript');
function add(a: number,b: number){
    return a+b;
}
const sum = add(2,3);


//boolean
let muted: boolean = true;
muted = false;
// Mensaje de error : muted = "callado";

// Number
let numerador:number = 42;
let denominador:number = 6;
let resultado =  numerador / denominador;

//  String
let nombre:string = 'Richard';
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = [];
people = ["Isabel","Nicole","Raul"];
// Error people.push(900);
people.push("9000");


let peopleAndNumbers: Array< string | number > =[];

peopleAndNumbers.push(2500);
peopleAndNumbers.push("hola");
// Error -> peopleAndNumbers.push(true)


//enumeraciones
enum Color {
    Rojo  = "Rojo",
    Verde = "Verde",
    Azul  = "Azul",
}
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`)

//Error -> let colorFavorito: Color = verde;

//  cuando desconocemos que tipo de variable será
let comodin : any = "joker";
comodin = { type : 'Wildcard' }


//Object
let someObject : object = { type:'wildcard'};