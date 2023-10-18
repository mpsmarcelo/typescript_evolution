import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController{

    private inputData  : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private _negociacao : Negociacao; 
    private _negociacoes = new Negociacoes();

    constructor(){
        this.inputData =  document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }


    adicionar():void{
        
        this.createNegociacao();
        this.addListNegociacao();
        this.limparFormulario();
        console.log(this._negociacoes);
        this.validarNegociacao();
        
    }

    private addListNegociacao():void{
        this._negociacoes.addList(this._negociacao);
    }

    private createNegociacao():Negociacao {
        const getValue = (el:any) => el.value;


        const exp = /-/g;
        const data = new Date(getValue(this.inputData).replace(exp, ','));
        const quantidade = parseInt(getValue(this.inputQuantidade));
        const valor = parseFloat(getValue(this.inputValor));

        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }

    private validarNegociacao(){
        // const getAprove = (negociacao : Negociacao) =>  negociacao.getQuantidade()
        // this._negociacoes.get().forEach((el:Negociacao) => {
        //     console.log('Negociação aprovada : ' + getAprove(el));    
        // });
    }

    limparFormulario(){
            this.inputData.value = '';
            this.inputQuantidade.value = '';
            this.inputValor.value = ''
            this.inputData.focus();
    }
}