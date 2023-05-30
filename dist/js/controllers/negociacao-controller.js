import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes;
        this._negociacoesView = new NegociacoesView('#negociacoes-view');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this._negociacoes.add(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        const regexp = /-/g;
        const data = new Date(this._inputData.value.replace(regexp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
