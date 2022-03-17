function solucao(precos) {
    let menorValor = precos[0];
    let valorTotal = 0;
    let indiceMenorValor = 0;
    
if (precos.length >= 3) {
    for (let indicePreco = 0; indicePreco < precos.length; indicePreco++) {
        
        if (precos[indicePreco] < menorValor) {
            menorValor = precos[indicePreco];
            indiceMenorValor = indicePreco;
        }
        
    }
    
    let valorPromocional = menorValor * 0.5;
    
    precos.splice(indiceMenorValor,1,valorPromocional);
}
    for (let preco of precos) {
        valorTotal +=preco;
    }
    
    console.log(valorTotal);
}

solucao([100, 100, 100]);