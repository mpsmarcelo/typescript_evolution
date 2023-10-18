export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get getVolume() {
        return Number(this.quantidade) * Number(this.valor);
    }
}
