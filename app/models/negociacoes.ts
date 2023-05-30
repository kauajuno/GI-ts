import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private _negociacoes : Array<Negociacao> = [];

    add(n : Negociacao) : void{
        this._negociacoes.push(n);
    }

    list(): ReadonlyArray<Negociacao>{
        return [...this._negociacoes];
    } 
}