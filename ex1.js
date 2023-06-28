const dadosPessoa = {
  nome: "Adso",
  idade: 33,
  profissao: "estudante",
  altura: 1.82,
};

function apresentar(dados) {
  console.log(
    `Olá! Meu nome é ${dados.nome}, sou um jovemde ${dados.idade} anos, ${dados.altura}m e sou ${dados.profissao}.`
  );
}

apresentar(dadosPessoa);
