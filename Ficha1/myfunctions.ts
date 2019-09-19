export{log,lutar}
import{Lutador} from "./lutador";

//função para escrever automaticamente na consola
function log(variavel){
    console.log(variavel);
}

//parte 4
// função recebe lutador e escreve na consola
// o nome do vencedor;
function lutar(esteLutador1 : Lutador,esteLutador2 : Lutador):string{
    if (esteLutador1.forca>esteLutador2.forca) 
    return esteLutador1.nome + " venceu com " + esteLutador1.forca + " pontos.";
    else 
    return esteLutador2.nome + " venceu com " + esteLutador2.forca + " pontos.";
}
