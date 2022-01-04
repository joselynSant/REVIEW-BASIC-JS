//**Iteración #4: Métodos findArrayIndex**

//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const flores = ['Rosa', 'Orquidea', 'Girasol', 'Tulipan']


let findArrayIndex = (array, texto) => {
    for(let item of array) {
      let value = item
      let position = array.indexOf(item)
      if(texto === value) {
        console.log(value + " posicion: " + position)
      } 
    }
  }
  
  findArrayIndex(flores, 'Rosa')
  findArrayIndex(flores, 'Orquidea')
  findArrayIndex(flores, 'Girasol')
  findArrayIndex(flores, 'Tulipan')
