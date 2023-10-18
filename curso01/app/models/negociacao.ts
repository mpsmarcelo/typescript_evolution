export class Negociacao{

    constructor(private readonly data : Date, private readonly  quantidade :Number, private readonly  valor : Number){ }

 
    public get getVolume(){
        return Number(this.quantidade) * Number(this.valor);
    }

}