let listaObjeto = {
    nome: 'Raiane',
    sobrenome: 'Yanagita',
    idade: 28

};

function listarKeys(object) {
let keys = Object.values(object);
console.log(keys);
};
listarKeys(listaObjeto);
