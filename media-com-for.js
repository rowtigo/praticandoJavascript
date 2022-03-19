//calcular media usando um for!

const notas = [5.4, 9.8, 1.9, 10.0]

let soma = 0

for(let i = 0; i < notas.length; i++ ){
    soma += notas[i]
   // console.log(notas[i])
}

const media = soma/notas.length

console.log(media)