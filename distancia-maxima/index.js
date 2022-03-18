function processData(input) {
    let coordenadas = input.split("\n");
    coordenadas.pop();
    let distancia = 0;
    
    const posicoes = [];
    let qtdPosicoes = Number(coordenadas[0]);
    
    for (let indice = 1; indice <= qtdPosicoes; indice ++ ) {
        posicoes.push( {
            x: coordenadas[indice].split(" ")[0],
            y: coordenadas[indice].split(" ")[1]
        } );
    }

    for (let indice2 = 0; indice2 < qtdPosicoes; indice2 ++) {
        for (let indice3 = 0; indice3 < qtdPosicoes; indice3 ++) {
            if (indice2 !== indice3) {
                let calc = ((posicoes[indice3].x-posicoes[indice2].x)**2 + (posicoes[indice3].y-posicoes[indice2].y)**2)**(1/2);
                if ( distancia < calc) {
                    distancia = calc;
                }
            }
        }
    }

    console.log(distancia);
}
processData("3\n0 0\n0 3\n4 0\n");