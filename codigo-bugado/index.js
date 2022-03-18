function processData(input) {
    let senhas = input.split("\n");
    let contador = 0;
    
    let aux = 0;
    for (let ordem = 0; ordem < senhas[0].length; ordem ++) {
        if (contador === senhas[0].length) {
            break;
        }

        for (let ordem2 = aux; ordem2 <senhas[1].length; ordem2 ++) {
            
            if (senhas[0][ordem] === senhas[1][ordem2]) {
                contador++;
                aux = ordem2;
                break;
            }
        }

        
    }
    if (contador === senhas[0].length) {
        console.log("SIM");
    }
    else {
        console.log("NAO");
    }
}

processData("cubos\ncuggbyos");
processData("cubos\newvelrabsocaeln");