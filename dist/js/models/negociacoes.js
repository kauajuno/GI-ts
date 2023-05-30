export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    add(n) {
        this._negociacoes.push(n);
    }
    list() {
        return [...this._negociacoes];
    }
}
