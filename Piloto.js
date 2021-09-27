class Piloto {
    constructor(nome, anosPilotando, treinosMes){
        this.nome = nome;
        this.anosPilotando = anosPilotando;
        this.treinosMes = treinosMes
    }

    xp(){
        return (this.treinosMes + (this.anosPilotando*30)) / 100
      }
}


export default Piloto;