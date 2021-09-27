import Piloto from './Piloto.js';
import Veiculo from './Veiculo.js';
import {chegada, recorde} from './api.js';



let arnaldo = new Piloto('Arnaldo',4,15)
// console.log(arnaldo.xp())

let pedro = new Piloto('Pedro',2,30)
//console.log(pedro.xp())

let luis = new Piloto('Luis',2,1)
 //console.log(luis.xp())


let carrango = new Veiculo('carro','corsa',2000,'cinza',100)
let ferrari = new Veiculo('carro','ferrari',2021,'vermelha',400)


var relatorio = function(obj){

      chegada(obj.piloto).then((respostaDistancia) => {
    

      if (respostaDistancia.length == Veiculo.totalVeiculosCorrida){
        recorde().then((resposta) => {
              console.log(`O recorde é de ${resposta}`)
            }).catch(erro => console.log(erro))
      }

    }).catch(erro => console.log(erro))
  
    console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km' )


}

ferrari.acelerando0a100(arnaldo,relatorio);
ferrari.acelerando0a100(pedro,relatorio);
carrango.acelerando0a100(luis, relatorio);



 