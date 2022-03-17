function solucao(texto) {
  let arrayNovo2 = [];
  for (let i = 0; i < texto.trim().split(" ").length; i++) {
      if (texto.trim().split(" ")[i] != "") {
          arrayNovo2.push(texto.trim().split(" ")[i]);
      }
  }
  console.log(arrayNovo2.length);
}

solucao("Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ");