//**Iteración #1: Mix for e includes**

//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let xAccion = [];
let xAnimacion = [];
let xAventura = [];
let xComedia = [];
let xThriller = [];

for (x of movies){
    if (x.categories.includes("comedia")){
        xComedia.push(x.title);
    } if (x.categories.includes("aventura")) {
        xAventura.push(x.title);
    } if (x.categories.includes("accion")){
        xAccion.push(x.title);
    } if (x.categories.includes("thriller")){
        xThriller.push(x.title);
    } if (x.categories.includes("animacion")){
        xAnimacion.push(x.title);
    }
}

console.log("titulos de genero Accion: " + xAccion);
console.log("titulos de genero Animacion: " + xAnimacion);
console.log("titulos de genero Aventura: " + xAventura);
console.log("titulos de genero Comedia: " + xComedia);
console.log("titulos de genero Thriller: " + xThriller);