const dadosPessoa = {
  nome: "Adso",
  idade: 33,
  profissao: "estudante",
  altura: 1.82,
};

const faixaEtaria = (idade) => {
  if (idade <= 21) {
    return "jovem";
  } else if (idade < 66) {
    return "adulto(a)";
  } else {
    return "idoso(a)";
  }
};

//function faixaEtaria(idade) {
// if (idade <= 21) {
//   return "jovem";
//  } else if (idade < 66) {
//    return "adulto(a)";
//  } else {
//   return "idoso(a)";
// }
//}

function apresentar(dados) {
  console.log(
    `Olá! Meu nome é ${dados.nome}, sou um ${faixaEtaria(dados.idade)} de ${dados.idade} anos, ${dados.altura}m e sou ${
      dados.profissao
    }.`
  );
}

apresentar(dadosPessoa);
