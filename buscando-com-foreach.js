const notas = [6.5, 8.9, 9.4, 10]

let somaDasNotas = 0

//callback
//Metodo que recebe uma funçãp
notas.forEach(notas =>{
                    //motas[x]
    somaDasNotas += notas
})

let media = somaDasNotas/notas.length

console.log(`A media é ${media}`)