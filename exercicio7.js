let listaObjeto = {
    nome: 'Raiane',
    sobrenome: 'Yanagita',
    idade: 28

};

function listarKeys(object) {
let keys = Object.keys(object);
console.log(keys);
};
listarKeys(listaObjeto);
