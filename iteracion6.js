//**Iteración #6: Función swap**

//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

//Sugerencia de array:

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

let swap = (arr, index1, index2) => {
    let auxi = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = auxi
    console.log(arr)
}

swap(1, 2)