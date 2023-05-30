import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private _negociacoes : Negociacao[] = [];

    add(n : Negociacao) : void{
        this._negociacoes.push(n);
    }

    list(): readonly Negociacao[]{
        return this._negociacoes;
    } 
}