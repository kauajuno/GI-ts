import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _negociacoes : Negociacoes = new Negociacoes;
    private _negociacoesView : NegociacoesView = new NegociacoesView('#negociacoes-view');
    private _mensagemView : MensagemView = new MensagemView('#mensagem-view');

    constructor(){
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes); 
    }

    public adiciona() : void{
        const negociacao : Negociacao = this.criaNegociacao();
        if(!this.isDiaUtil(negociacao.data)){
            this._mensagemView.update("Negociações só podem ser cadastradas em dias úteis!");
            return;
        }
        this._negociacoes.add(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
        this.limparFormulario();
    }

    private isDiaUtil(data : Date) : boolean{
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

    private criaNegociacao() : Negociacao{
        const regexp = /-/g;
        const data = new Date(this._inputData.value.replace(regexp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }

    private limparFormulario() : void{
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}