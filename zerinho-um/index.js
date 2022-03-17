function solucao(jogadores) {
    let zerinhos = [];
    let unzinhos = [];
    
    for (let jogador of jogadores) {
        
        if (jogador.jogada === 0) {
            zerinhos.push(jogador.nome);
        }
        else {
            unzinhos.push(jogador.nome);
        }
    }
    if (zerinhos.length === 1) {
        console.log(zerinhos[0]);
    }
    else if (unzinhos.length === 1) {
        console.log(unzinhos[0]);
    }
    else {
        console.log("NINGUEM");
    }
}

solucao([
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]);