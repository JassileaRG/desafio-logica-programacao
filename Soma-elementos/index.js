function solucao(lista) {
    let valorTotal = 0;
  for (let valor of lista) {
   valorTotal +=valor;
  }
  console.log(valorTotal);
}

solucao([5, 5]);