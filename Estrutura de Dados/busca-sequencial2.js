function buscaSequencial (lista, valorBusca, fnComp){
    for(let i=0; i<lista.length; i++){
        //encontrou o que esta buscando: retorna a posição que foi encontrado
        //if(lista[i]===valorBusca) return i
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1 // valorBusca não foi encontrado em lista
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome){
    //Retorna true se o atributo first_name do objeto for igual a nome
    return obj.first_name === nome
}

console.time('EDUARDO')
console.log(buscaSequencial(listaNomes, 'EDUARDO', comparaNome))
console.timeEnd('EDUARDO')