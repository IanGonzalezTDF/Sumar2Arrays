let lista1: number[] = new Array(6);
let lista2: number[] = new Array(6);
let suma: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  lista1[indice] = Number(
    prompt(`Ingrese el numero a guardar en la posicion ${indice} de la LISTA 1`)
  );
}
for (indice = 0; indice < 6; indice++) {
  lista2[indice] = Number(
    prompt(`Ingrese el numero a guardar en la posicion ${indice} de la LISTA 2`)
  );
}
for (indice = 0; indice < 6; indice++) {
  suma[indice] = lista1[indice] + lista2[indice];
  console.log(suma[indice]);
}
