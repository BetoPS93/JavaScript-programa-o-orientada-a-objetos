const user = {
  nome: "beto",
  email: "b@b.com",
  nascimento: "24/03/1993",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "mariana",
  email: "mari@mari.com",
  role: "admin",
  criarCurso() {
    console.log("Cuso Criado!");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
