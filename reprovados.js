const alunos  = ['Rodrigo', 'Marcos', 'Felipe', 'Maria']
const medias  = [8.9, 4.3, 8.7, 10]

const reprovados = alunos.filter( (_, indice) =>  medias[indice] < 5 )

console.log(reprovados)

