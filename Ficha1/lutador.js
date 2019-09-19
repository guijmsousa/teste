"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var myfunctions_1 = require("./myfunctions");
//parte 1
var Lutador = /** @class */ (function () {
    //parte 2
    //construtor
    function Lutador(nome, forca) {
        this.nome = nome;
        this.forca = forca;
        this.escalao = "iniciante";
    }
    //parte 3
    //metodo
    Lutador.prototype.treinar = function () {
        if (this.escalao == "iniciante") {
            this.forca = this.forca + 1;
        }
        else {
            this.forca = this.forca + 2;
        }
        myfunctions_1.log(this.nome + " treinou e  ficou com " + this.forca + " pontos.");
    };
    return Lutador;
}());
exports.Lutador = Lutador;
// JUDOCA
var Cor;
(function (Cor) {
    Cor[Cor["branco"] = 0] = "branco";
    Cor[Cor["amarelo"] = 1] = "amarelo";
    Cor[Cor["laranja"] = 2] = "laranja";
    Cor[Cor["verde"] = 3] = "verde";
    Cor[Cor["azul"] = 4] = "azul";
    Cor[Cor["vermelho"] = 5] = "vermelho";
    Cor[Cor["preto"] = 6] = "preto";
})(Cor || (Cor = {}));
var corSite = Cor.vermelho;
var Judoca = /** @class */ (function (_super) {
    __extends(Judoca, _super);
    //construtor
    function Judoca(nome, forca) {
        var _this = _super.call(this, nome, forca) || this;
        _this.escalao = "Mestre";
        _this.cinto = Cor.preto;
        return _this;
    }
    return Judoca;
}(Lutador));
