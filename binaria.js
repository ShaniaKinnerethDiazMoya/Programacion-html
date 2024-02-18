function busquedaßinaria(datos, valor) {
    let izquierda = 0;
    let derecha = datos.length-1;
    while (izquierda <= derecha) {
        let mitad = Math.floor((izquierda + derecha) / 2);
        let dato = datos[mitad];
        if (dato == valor) {
            return mitad;
        } else if (valor > dato) {
            izquierda = mitad + 1;
        } else {
            derecha = mitad - 1;
        }
    }
    return -1;
}

let numbi = [1,2,3,4,5,6,7,9];
let numero = 9;
console.log(busquedaßinaria(numbi, numero)+1);
console.log();
