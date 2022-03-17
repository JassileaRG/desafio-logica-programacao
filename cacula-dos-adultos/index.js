function solucao(lista) {
  let novaLista = [];
  let resposta = "CRESCA E APARECA";

  for (let idade of lista) {

      if (idade >= 18) {
          novaLista.push(idade);
      }

  }
  let maisJovem = novaLista[0];

  for (let idade of novaLista) {

      if (idade < maisJovem) {
          maisJovem = idade
      }
      resposta = maisJovem;
  }
  console.log(resposta);
}

solucao([12, 18, 27]);