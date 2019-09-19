import { log } from "./myfunctions"
export { Lutador }

//parte 1
class Lutador {
    //atributos
    nome: string;
    escalao: string;
    forca: number;

    //parte 2
    //construtor
    constructor(nome: string, forca: number) {
        this.nome = nome;
        this.forca = forca;
        this.escalao = "iniciante";
        
    }
//parte 3
    //metodo
    treinar(){
        
        if (this.escalao=="iniciante"){
            this.forca=this.forca + 1;
        }
        else{
            this.forca=this.forca + 2;
        }
        log(this.nome + " treinou e  ficou com "+ this.forca  + " pontos.");
    }
}


// JUDOCA

enum Cor{branco, amarelo, laranja, verde, azul, vermelho, preto}


class Judoca extends Lutador {

   cinto: Cor;

//construtor
constructor(nome: string, forca: number) {
    super(nome, forca);
    this.escalao = "Mestre";
    this.cinto = Cor.preto;
  
}

}
