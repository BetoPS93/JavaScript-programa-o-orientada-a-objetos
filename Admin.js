import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin("beto", "del.com", "21-01-2036");
console.log(novoAdmin.criarCurso("js", "20"));
