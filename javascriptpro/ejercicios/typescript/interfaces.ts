enum Color{
    rojo = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho : number
    alto: number
    color? : Color  //? = opcional
}

let rect : Rectangulo = {
    ancho:4,
    alto:2,
    color : Color.Verde
};


function area(r: Rectangulo):number{
    return r.alto*r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

rect.toString = function(){
    //return `Un reactangulo ${this.color}`
    return this.color ? `Un rectangulo ${this.color}`: `Un rectangulo`;
}
console.log(rect.toString())