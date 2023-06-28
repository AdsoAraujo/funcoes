function faixaEtaria(idade) {
  if (idade <= 21) {
    return "jovem";
  } else if (idade < 66) {
    return "adulto(a)";
  } else {
    return "idoso(a)";
  }
}

const valorRetornado = faixaEtaria(18);
console.log(valorRetornado);
