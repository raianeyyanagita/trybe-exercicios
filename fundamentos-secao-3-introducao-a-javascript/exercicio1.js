let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'Sim';

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}; 


Object.keys(info).forEach((key) => {
    const texto = key === 'recorrente'? 'Ambos recorrentes': `${info[key]} e ${info2[key]}`
    console.log(texto);
})




//for(let key in info) {
//console.log(Object.values(info, info2));
//} console.log('Bem-vinda, ' + info.personagem);
//function concatenar(info) {
 //   return Object.values(info) + Object.values(info2);
//}
//console.log(concatenar(info));




