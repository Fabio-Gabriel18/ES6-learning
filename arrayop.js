const nums = [1,3,6,4,7,9,13,16];

const kidArr = nums.map(function(item, index){ //percorre cada item do array
	return item+index;
});

console.log(kidArr);

const soma = nums.reduce(function(total, next){ //pegar o array e retornar um núemro
	return total + next;
});

console.log(soma);

//usando Arrow Functions para reduzir o código.
const pares = nums.filter(item => item % 2 === 0); //filtra buscando apenas os valores que atendem a condição.

console.log(pares);

const encontra = nums.find(item => item === 16);

console.log(encontra);

const valPadrao = (a = 3, b = 13) => console.log(a+b); //Definindo valores padrão para os argumentos.
//Assim, a função funcionará (com os valores definidos) mesmo se:
valPadrao(7); //receber só um parâmetro.
valPadrao(); /// não receber nenhum parâmetro.