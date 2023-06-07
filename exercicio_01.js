/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    } catch(erro){
      console.log(erro.message)
    }
    
  } 

  atributos() {
    if ((this.nome != "") && (this.idade != "") && (this.especie != "")){
      return this.nome + this.idade + this.especie;

    } else{
        throw new Error ("Nome, idade ou especie estão vazios")
    }
  }
}

//const meuAnimal = new Animal("Fido", 3, "cachorro");
//const atributos = meuAnimal.mostrarAtributos();

const meuAnimal2 = new Animal("", 3, "cachorro");
const atributos2 = meuAnimal2.atributos();

// Imprimindo os atributos
console.log(atributos2);
console.log(atributos2.nome);   
console.log(atributos2.idade);  
console.log(atributos2.especie); 

