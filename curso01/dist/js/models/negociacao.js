export class Negociacao{

    #data;
    #quantidade;
    #valor;


    constructor(data, quantidade, valor){
            this.#data = data;
            this.#quantidade = quantidade;
            this.#valor = valor;
    }

    get getData(){
        return this.#data;
    }

    get getQuantidade(){
        return this.#quantidade;
    }

    get getVolume(){
        return this.#quantidade * this.#valor;
    }

}