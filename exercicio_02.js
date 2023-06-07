/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class EstudanteErro extends Error {
  constructor(message){
    super(message);
    this.name = "EstudanteErro";
  }
}
class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try{
      return this.atributos();
    } catch (erro) {
      console.log(erro.stack)
    }
  }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.turma != ""){
      return  this.nome + this.idade + this.turma;

  }else{
    throw new EstudanteErro ("Nome, idade ou turma estão vazios")
  }
  }
}

const estudante = new Estudante("", 16, "3A");
const atributos = estudante.mostrarAtributos();

console.log(atributos);
//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.turma); 

