class Veiculo {
  constructor(tipo, modelo, ano, cor,potenciaMotor){
    Veiculo.totalVeiculosCorrida = 0;
    this.tipo = tipo;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.potenciaMotor = potenciaMotor;
    this.feedback = null;
  }

  acelerando0a100(piloto,cb){
  
    if (!piloto){
      console.log('sem piloto')
      return 
    }else{
      Veiculo.totalVeiculosCorrida +=1
    }
    
    if (this.feedback) return this.feedback
    var aux = 50;
    if (this.potenciaMotor <= 100) {
      aux = 0.9
    } else if (this.potenciaMotor > 100 && this.potenciaMotor <= 200) {
      aux = 0.7
    } else if (this.potenciaMotor > 200 && this.potenciaMotor <= 300) {
      aux = 0.6
    }else if (this.potenciaMotor > 300) {
      aux = 0.2
    }
  
    var start = new Date().getTime();
    var velocidade = 0 
    var animacao = '.'
    var intervalo = setInterval(() => {
      velocidade += 1
      animacao = animacao == '.' ? '..' : 
        (animacao == '..' ? '...' : 
          (animacao == '...' ? '.' : '' )
        )
  
      console.log('acelerando ' +this.modelo + animacao + ' ' +  velocidade + 'km')
      if (velocidade === 100){
      clearInterval(intervalo)
      var end = new Date().getTime();
      this.piloto = piloto.nome
      this.feedback = (end - start)/ 1000.0
      cb(this)
      
    }
      
    }, 100 * (aux/piloto.xp()));
  
  }
}


export default Veiculo;

