let listaObjeto = {
    nome: 'Raiane',
    sobrenome: 'Yanagita',
    idade: 28

};

function tamanhoObjeto(object) {
    return Object.keys(object).length
    
    };
    tamanhoObjeto(listaObjeto);
    console.log(tamanhoObjeto(listaObjeto));
    