"use strict";
exports.__esModule = true;
var myfunctions_1 = require("./myfunctions");
var lutador_1 = require("./lutador");
//parte 3
var lutador1 = new lutador_1.Lutador("Rui", 3);
lutador1.treinar();
//parte 4
var lutador2 = new lutador_1.Lutador("Manuel", 3);
var lutador3 = new lutador_1.Lutador("José", 2);
myfunctions_1.log(myfunctions_1.lutar(lutador2, lutador3));
//parte 5
var lutador4 = new lutador_1.Lutador("Maria", 3);
var lutador5 = new lutador_1.Lutador("Manuela", 2);
lutador5.escalao = "Junior";
lutador5.treinar();
myfunctions_1.log(myfunctions_1.lutar(lutador4, lutador5));
