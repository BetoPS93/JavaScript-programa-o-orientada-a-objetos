import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado no curso ${curso}.`;
  }
}

const novoDocente = new Docente("Dalbert", "dal@d.com", "21-01-2021");
console.log(novoDocente);
console.log(novoDocente.aprovaEstudante("Adal", "JavaScript"));
