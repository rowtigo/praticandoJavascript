const alunos = [`Rodrigo`, `Nathi`, `Rose`]
const media = [8.8, 9.7, 10]
const listaDeAlunoseMedias = [alunos, media]

let valorBusca = 'Nathi'



function buscaAluno(s_busca){
    if(listaDeAlunoseMedias[0].includes(s_busca)){
        index = listaDeAlunoseMedias[0].indexOf(s_busca)

        return  `Aluno: ${s_busca} encontrado com a media ${listaDeAlunoseMedias[1][index]}`
    }else{
        return `not found! :)`
    }
}

console.log(buscaAluno("Nathi"))

console.log()