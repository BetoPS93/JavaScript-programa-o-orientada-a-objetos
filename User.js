export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  set nome(novoNome) {
    if (novoNome === ''){
      throw new Error('Formato inválido.');
    }
    this.#nome = novoNome
  } 

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

/* const novoUser = new User("Dal", "D@D.com", "2021-01-02");
console.log(novoUser);
console.log(novoUser.exibirInfos());
 */
