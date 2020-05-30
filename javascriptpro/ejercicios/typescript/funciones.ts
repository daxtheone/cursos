
//return de tipo number
function add(a: number, b: number): number{
    return a + b;
}
const sum= add(25,30);


//funcion que regrese un numero y adentro otro numero
function createAdder (a : number):(number)=>number {
    return function (b:number){
        return b + a ;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

//funcion con parametro opcional  ? => fullName(firstName: string, lastName?: string):string
// Valor por default fullName(firstName: string, lastName: string = 'Smith'):string  
function fullName(firstName: string, lastName?: string):string{
    return `${firstName} ${lastName}`;
}
const richadr= fullName("Richard","Kaufman");

const richadrname= fullName("Richard");
console.log(richadrname);
