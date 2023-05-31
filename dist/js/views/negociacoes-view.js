import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map((element) => {
            console.log(element);
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(element.data)}</td>
                            <td>${element.quantidade}</td>
                            <td>${element.valor}</td>
                        </tr>
                        `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        this._div.innerHTML = this.template(model);
    }
}
