


//criando o bloco




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


function verificaPar(num) {
    if(num%2 === 0){
        
    }
}


/*

let nome;
let quant;

*/

c('#btn-enviar').addEventListener('click', ()=>{
    
  let  nome = c('#name').value;
  let  quant = parseInt(c('#qt').value);

  //  quant = Number(quant);


    if (!quant){
      alert('Quantidade inválida');
      esvaziar();

    } else {
      cliente.push( {name:nome, amount:quant} );
      c('.fila-area').innerHTML= '';
      mapear();
      desaparecer();
    }
   
});


function esvaziar (){
  c('#name').value = '';
  c('#qt').value = '';
}


let  timer;

function parar () {
  clearTimeout(timer);
}

function desaparecer () {


  timer =  setInterval(function(){
    if(cliente.length > 2){
      
    cliente.shift();
    c('.fila-area').innerHTML= '';
    mapear();
    
    } else {
      parar();
    }
  }, 1000);

} 







