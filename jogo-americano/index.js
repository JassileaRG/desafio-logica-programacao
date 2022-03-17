function solucao(numeros) {
  let soma = 0;
  let sorteado = null;
  for (let valor of numeros) {
      soma+=valor;
  }
  
  if (soma <= numeros.length) {
      sorteado = soma;

  } else {
      if (String(soma / numeros.length).indexOf(".") === -1) {
          sorteado = numeros.length;
      }
      else {
          sorteado = soma - (Math.trunc(soma / numeros.length) * numeros.length);
      }
  }
  console.log(sorteado);
}

solucao([1, 3, 2, 1]);