export abstract class View<T>{
    protected _div : HTMLElement;

    constructor(selector : string){
        this._div = document.querySelector(selector);
    }

    protected abstract template(model : T) : string;

    public update(model : T) : void{
        const template = this.template(model);
        this._div.innerHTML = template;
    }
}