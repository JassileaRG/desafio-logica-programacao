function solucao(min, max, valores) {
  const novaValores = [];
for (let valor of valores) {
    if (valor >= min && valor <=max) {
        novaValores.push(valor);
    }

}
    console.log(novaValores); 
}
solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9])