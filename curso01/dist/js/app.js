import { Negociacao } from "./models/negociacao.js";

 const negociacao = new Negociacao(new Date(),1,50);
 console.log(negociacao);
 console.log('data :' + negociacao.getData);
 console.log('quantidade :'+ negociacao.getQuantidade);
console.log('volume:' + negociacao.getVolume)