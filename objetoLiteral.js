const user = {
  nome: "beto",
  email: "b@b.com",
  nascimento: "24/03/1993",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

//user.exibirInfos();
//const exibir = user.exibirInfos;
//exibir();

const exibir = function () {
  console.log(this.nome);
};

const exibirNome = exibir.bind(user);
exibirNome();
exibir();
