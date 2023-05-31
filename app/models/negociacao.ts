export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume() {
        return this.quantidade * this.valor;
    }

    get data() : Date{
        const dateCopy : Date = new Date(this._data.getTime());
        return dateCopy;
    }
}