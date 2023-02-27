import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("mariana", "teste@teste.com", "21-01-2023");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("rodrigo", "bum@bum.com", "21-01-2019");

console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome)

