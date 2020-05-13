

let cliente = [
  {
    name: "Antonio figueiredo",
    amount: 3,
  },
  {
    name: "Maria Carolina",
    amount: 1,
  },
  {
    name: "Jão Vitor",
    amount: 2,
  },
  {
    name: "ododjd",
    amount: 28,
  },
  {
    name: "Jwww",
    amount: 10,
  },
  {
    name: "Jeeee",
    amount: 66,
  },
  {
    name: "Andressa Silva",
    amount: 27,
  },
];


// reduzindo o document.querySelector
const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

/*
for(let i in cliente){

  c('.testeH').innerHTML = cliente[i].name ;
  c('.testeP').innerHTML = cliente[i].amount ;

} */




function mapear(){

cliente.map( (item, index)=>{

  let ul = c('.li-item').cloneNode(true);

  ul.setAttribute('data-key', index);

  ul.querySelector('.item-nome').innerHTML = item.name;
  ul.querySelector('.item-qt').innerHTML = `Quantidade:  ${item.amount}` ;


  c('.fila-area').append(ul); 

})

}

mapear();

/*

function verificaPar () {

  for(let i in cliente){

      let comp = parseInt(cliente[i].amount);

              
        if((comp % 2) == 0 ){
          console.log(cliente[i]+'par');
          delete cliente[i];
         // cliente.splice(i, 1);
        } 
    }
    
    console.log(cliente);
}
*/


/*
function vamover(){
  for(let i in cliente) {

      if(cliente[i] === NaN){
        cliente.splice(i, 1);
        console.log(cliente[i]+'removido');
      }
  }
}

*/





function verificaPar () {

  let indice = parseInt(cliente.length);
  
  let i = parseInt(indice) - 1;

  while(i > 0){

      let comp = parseInt(cliente[i].amount);

        if((comp % 2) == 0 ){
          cliente.splice(i, 1);
          console.log(`Array ${i} removido`);
    }
    i--;
   // indice = cliente.length;
  }

}

/*

function limpa () {

let buscarPor = null;

let indice = cliente.indexOf(buscarPor);
while(indice >= 0){
    cliente.splice(indice, 1);
    indice = cliente.indexOf(buscarPor);
}

}
*/


/*

let nome;
let quant;

*/

c('#btn-enviar').addEventListener('click', ()=>{
    
  let  nome = c('#name').value;
  let  quant = parseInt(c('#qt').value);

    if (!quant){
      alert('Quantidade inválida');
      esvaziar();

    } else {

      if(quant === 71){
        verificaPar();
        mapear();
      }
      

      cliente.push( {name:nome, amount:quant} );
      c('.fila-area').innerHTML= '';
      mapear();
      desaparecer();
      esvaziar();
    }
   
});


// funçaõ utilizada na atualização da página
function esvaziar (){
  c('#name').value = '';
  c('#qt').value = '';
}


//criando um timer
let  timer;

function parar () {
  clearTimeout(timer);
}

function desaparecer () {

  timer =  setInterval(function(){
    if(cliente.length > 1){
      
    cliente.shift();
    c('.fila-area').innerHTML= '';
    mapear();
    
    } else {
      parar();
    }
  }, 1000);

} 







