function solucao(lista) {
  let valorTotal = 0
  for (let valor of lista) {
      valorTotal+=valor;
  }
  let mediaValores = valorTotal / lista.length;
  console.log(mediaValores);
}
solucao([100, 100, 100, 100, 100]);