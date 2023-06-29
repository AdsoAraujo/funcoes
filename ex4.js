const dadosPessoa = {
  nome: "Adso",
  idade: 33,
  profissao: "estudante",
  altura: 1.82,
  determinarFaixaEtaria: function () {
    if (this.idade <= 21) {
      return "jovem";
    } else if (this.idade < 66) {
      return "adulto(a)";
    } else {
      return "idoso(a)";
    }
  },
  apresentar: function () {
    const faixaEtaria = this.determinarFaixaEtaria(this.idade);

    console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m e sou ${this.profissao}.`);
  },
};

dadosPessoa.apresentar();
