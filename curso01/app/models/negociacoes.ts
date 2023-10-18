import { Negociacao } from './negociacao';
export class Negociacoes{
    private _negociacoes : Negociacao[] = []


    public addList(negociacao : Negociacao):void{
         this._negociacoes.push(negociacao);
    }

    public get():ReadonlyArray<Negociacao>{
        return this._negociacoes;
    }
}