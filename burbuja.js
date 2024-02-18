function Burbuja() {
    var lista = [4,7,3,1,8,2];
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); 
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] < lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista);
}