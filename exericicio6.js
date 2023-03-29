let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor;

for(let index = 0; index < numbers.length; index += 1) {
    if(index === 0){
        numeroMenor = numbers[index];
    }
    
    if (numbers[index] < numeroMenor){
        numeroMenor = numbers[index];
       }
    
} console.log(numeroMenor);