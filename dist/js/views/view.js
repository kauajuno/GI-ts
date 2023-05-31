export class View {
    constructor(selector) {
        this._div = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this._div.innerHTML = template;
    }
}
