let calcularDesconto = function(valor){
   let percentualFolha = 19
   return {
     bruto:valor,
     desconto: valor*(percentualFolha/100),
     liquido: valor - (valor*(percentualFolha/100))
   }
}

let salario = function(valorDiario,beneficios,cb){
  let total = valorDiario * 30 + beneficios
  return cb(total)
}

let pagamento = salario(100,322,calcularDesconto)
console.log(pagamento)

// let somar = function(valores,resposta,cb){
//   total = 0;
//   valores.forEach(numero => {
//     total += numero
//   });
//   var acertou = resposta === total
//   if (cb){
//     cb(total,acertou,resposta)
//   } else{
//     return total
//   }
  
// }

// let visor = function(resultado,acertou,resposta){
//   console.log(`sua tentativa ${resposta}`)
//   console.log(`o resultado é ${resultado}`)
//   if(acertou){
//     console.log('Parabéns!')
//   }else{
//     console.log('Não desanime!')
//   }
  
// }

// let valores = [1,2,3,4]
// console.log(somar(valores))
// somar(valores,11,visor)


let visor = function({total:resultado,acertou,resposta}){
  console.log(`sua tentativa ${resposta}`)
  console.log(`o resultado é ${resultado}`)
  if(acertou){
    console.log('Parabéns!')
  }else{
    console.log('Não desanime!')
  }
  
}


let somar = function(valores,resposta){
  return new Promise(function(resolve,reject){
 
    total = 0;
    valores.forEach(numero => {
      total += numero
    });
    var acertou = resposta === total
    resolve({
      total,
      acertou,
      resposta
    })
  })
}

let valores = [1,2,3,4]
let resposta = 10
// somar(valores,resposta).then(function(response){
//   visor(response)
// }).catch(function(err){
//   console.log(err)
// })

// let iniciar = async function (){
//   try{
//     let response = await somar(valores,resposta)
//     visor(response)
//   }catch(err){
//     console.log(err)
//   }
  
// }

// iniciar()

let axios = require('axios')

// axios
// .get('https://jsonplaceholder.typicode.com/todos')
// .then(function(response){
//   let todo = response.data[0]
//   axios
//   .get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`).
//   then(function(response){
//     console.log(`nome ${response.data.name}, email ${response.data.email}`)
//   })
// })

let premiarPrimeiroPost = async function (){
 let todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
 let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${todos.data[0].userId}`);
 console.log(`nome ${user.data.name}, email ${user.data.email}`)
}


premiarPrimeiroPost()


