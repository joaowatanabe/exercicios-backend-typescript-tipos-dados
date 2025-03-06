const listaNumeros: number[] = [1, 5, 2];

const tabuada = (numeros: number[]) => {
  for (let numero of numeros) {
    for (let i = 0; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`)
    }
    console.log("\n-----------------------")
  }


};

tabuada(listaNumeros)
