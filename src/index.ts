let lista1: number[] = new Array(6);
let lista2: number[] = new Array(6);
let suma: number[] = new Array(6);
let contador: number;

for (contador = 0; contador < 6; contador++) {
  lista1[contador] = Number(
    prompt(
      `Ingrese el numero a guardar en la posicion ${contador} de la LISTA 1`
    )
  );
}
for (contador = 0; contador < 6; contador++) {
  lista2[contador] = Number(
    prompt(
      `Ingrese el numero a guardar en la posicion ${contador} de la LISTA 2`
    )
  );
}
for (contador = 0; contador < 6; contador++) {
  suma[contador] = lista1[contador] + lista2[contador];
  console.log(`El resultado de la suma es : ${suma[contador]}`);
}
