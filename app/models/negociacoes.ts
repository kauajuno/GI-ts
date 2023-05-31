import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private _negociacoes : Negociacao[] = [];

    public add(n : Negociacao) : void{
        this._negociacoes.push(n);
    }

    public list(): readonly Negociacao[]{
        return this._negociacoes;
    } 
}