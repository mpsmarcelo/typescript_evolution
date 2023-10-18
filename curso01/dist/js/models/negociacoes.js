export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    addList(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get() {
        return this._negociacoes;
    }
}
