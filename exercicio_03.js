class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try{
      return this.atributos()
    }catch (erro) {
      console.log(erro.message)
    }
  }

  atributos() {
    if((this.estudante != "") && (this.cosplay != "") && (this.nota_cosplay != "")){
      return this.estudante +  this.cosplay + this.nota_cosplay;
    }
    else{
      throw new Error ("Está faltando o nome do estudante ou cosplay ou a nota")
    }
  }
}

const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos);
console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

