const bibli = {
	nome:"Biblioteca do México",
	endereço:"Rua do México - N° 872",
	livro: {
		numLivros:"1.400.000",
		numAutores:"100.000",
		datas:"1890-2019"
	}
}

const {nome,endereço} = bibli;

console.log(nome);
console.log(endereço);

function mostra(nome,livro:{numLivros}){
	console.log(numLivros);
}


mostra(bibli);