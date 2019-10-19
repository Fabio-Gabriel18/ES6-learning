const user = {    //1
  nome:"Edward",   
  idade:"280",  
  endereco: {   
    cidade:"Forks", 
    rua:"Meio do nada" 
  }
} //8

const {nome,endereco:{...end}} = user; //10 -- REST (pega todos os valores de endereco)

console.log(nome); //12
console.log(end);  //13

console.log("------ função --------");

function des({idade,endereco:{cidade}}){//17
  console.log(idade, cidade);
} //19

des(user); //21

console.log(" ------rest in function -----");

function operator(...params){ //25
  console.log(params); // converter os parametros em um array
  return params.reduce((total,next) => total+next); //conta os parametros e soma
} //28

console.log(operator(1,2,4,5)); //30

console.log(" ------- SPREAD it like ------");

const user2 = ["Bella","17"]; //34
const enduser2 = ["Phoenix","onde mora o Phill"];

const user3 = [ ...user2, ...enduser2];

console.log(user3); //39

const gosto = "sangue";
const user4 = {...user, nome: "Alice", gosto}; //mudou o conteúdo de nome e adicionou a propriedade gosto com o valor da constante gosto.

console.log(`Meu nome é ${user4.nome}, tenho ${user4.idade} anos e gosto de ${user4.gosto}`);
//Para usar templete literals (${}) se usa crase ao invés de aspas.
