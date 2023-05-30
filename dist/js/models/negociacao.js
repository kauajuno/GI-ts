export class Negociacao {
    constructor(_data, valor, quantidade) {
        this._data = _data;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const dateCopy = new Date(this._data.getTime());
        return dateCopy;
    }
}
