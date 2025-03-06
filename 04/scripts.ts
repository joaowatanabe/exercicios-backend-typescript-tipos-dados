const computador: { produto: string; lote: number; ano: number; qtd: number } =
  {
    produto: "CPU Dual Core 3.0GHZ",
    lote: 321,
    ano: 2022,
    qtd: 5,
  };

const linhaProducao = (computador: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const resultado: string[] = [];
  for (let i = 1; i <= computador.qtd; i++) {
    resultado.push(
      `${computador.lote}-${computador.ano}-${i.toString().padStart(3, "0")}`
    );
  }

  return resultado;
};

console.log(linhaProducao(computador));
