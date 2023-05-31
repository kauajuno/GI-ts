export class View{
    protected _div : HTMLElement;

    constructor(selector : string){
        this._div = document.querySelector(selector);
    }
}