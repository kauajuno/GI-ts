export class Negociacao {

    constructor(
        private _data: Date,
        public readonly valor: number,
        public readonly quantidade: number
    ) { }



    get volume() {
        return this.quantidade * this.valor;
    }

    get data() : Date{
        const dateCopy : Date = new Date(this._data.getTime());
        return dateCopy;
    }
}