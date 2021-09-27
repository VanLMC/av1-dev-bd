let posicao = []
let servidorOnline = true;
const chegada = (piloto) => {
  return new Promise((resolve, reject) => {
      if (!servidorOnline) reject('servidor Offline')
      posicao.push(piloto)
      resolve(posicao)
     
      
  })
}

const recorde = () => {
  return new Promise((resolve, reject) => {
      if (!servidorOnline) reject('servidor Offline')
      resolve(posicao[0])
  })
}


export {chegada, recorde};
