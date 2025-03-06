const texto: string = "programador";

const soletrar = (texto: string): string => {
  //O método split separa a string em um array com cada letra separada [j, o, a, o] e o join junta elas e retorna uma string
  return texto.split("").join("-");
};

console.log(soletrar(texto));
