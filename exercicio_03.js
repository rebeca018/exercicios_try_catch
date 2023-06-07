class NerdIfErro extends Error {
  constructor(message){
    super(message);
    this.name = "NerdIfErro";
  }
}
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
      console.log(erro.stack)
    }
  }

  atributos() {
    if(this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return this.estudante +  this.cosplay + this.nota_cosplay;
    }
    else{
      throw new NerdIfErro ("Está faltando o nome do estudante ou cosplay ou a nota")
    }
  }
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos);
//console.log(atributos.estudante); 
//console.log(atributos.cosplay);   
//console.log(atributos.nota_cosplay);

