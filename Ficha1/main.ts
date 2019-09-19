import{log,lutar} from "./myfunctions";
import{Lutador} from "./lutador";

//parte 3
let lutador1: Lutador= new Lutador("Rui",3);
lutador1.treinar();

//parte 4
let lutador2: Lutador= new Lutador("Manuel",3);
let lutador3: Lutador= new Lutador("José",2);
log(lutar(lutador2,lutador3));

//parte 5
let lutador4: Lutador= new Lutador("Maria",3);
let lutador5: Lutador= new Lutador("Manuela",2);
lutador5.escalao="Junior";
lutador5.treinar();
log(lutar(lutador4,lutador5));
