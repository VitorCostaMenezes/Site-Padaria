// reduzindo o document.querySelector
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


//esta função mapeia o array
//clona uma tag e seu conteúdo no corpo do HTML
//insere um datakey para cada indice do array
//e insere as informações colhidas no array nas tags clonadas

function mapear() {

  cliente.map((item, index) => {

    let ul = c('.li-item').cloneNode(true);

    ul.setAttribute('data-key', index);

    ul.querySelector('.item-nome').innerHTML = item.name;
    ul.querySelector('.item-qt').innerHTML = `Quantidade:  ${item.amount} <br> Total a pagar: <strong> R$ ${(item.amount * 0.30).toFixed(2)}</strong>`;
                                                            //foi inserida acima um código para apresentar o total a pagar pela quantidade pães

    c('.fila-area').append(ul);
  })
}

//executando a função para exibir o array na tela
//atualiza a página com as informações presentes no array
mapear();


//como próprio nome ja diz, confere se um número épar
//utilizada neste caso para verificar se a quantidade de pães é par 
function verificaPar() {

  let indice = parseInt(cliente.length);

  let i = parseInt(indice) - 1;

  while (i > 0) {

    let comp = parseInt(cliente[i].amount);

    if ((comp % 2) == 0) {
      cliente.splice(i, 1);
      console.log(`Array ${i} removido`);
    }
    i--;
  }
}


//captura o evento do botão  "quero pão"
c('#btn-enviar').addEventListener('click', () => {

  let nome = c('#name').value;
  let quant = parseInt(c('#qt').value);

  if (!quant) {
    alert('A quantidade não é válida!  Digite apenas números. Ex: 1, 3, 7, 10 ');
    esvaziar();

  } else {

    if (quant === 71) {
      verificaPar();
      mapear();
    }

    //insere no final do array o nome e quantidade digitada 
    cliente.push({ name: nome, amount: quant });
    c('.fila-area').innerHTML = '';
    mapear();
    desaparecer();
    esvaziar();
  }
});


// função utilizada para esvaziar os values
function esvaziar() {
  c('#name').value = '';
  c('#qt').value = '';
}


//criando um timer para dar stop na  função desaparecer
let timer;
function parar() {
  clearTimeout(timer);
}


//função utilizada fazer com que os nomes saiam da lista a cada 10 segundos
function desaparecer() {

  timer = setInterval(function () {
    if (cliente.length > 0) {

      cliente.shift();
      c('.fila-area').innerHTML = '';
      mapear();

    } else {
      parar();
      mapear();
    }
  }, 10000);
}


// ---------------- incuindo a API METAWEATHER-------------------------------
const url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/";

fetch(url)

  .then(resposta => resposta.json())
  .then(json => carregaTempo(json));


function carregaTempo(json) {

  let { consolidated_weather } = json;
  

  c('#localidade').innerHTML = `${json.title}`;
  c('#nome-tempo').innerHTML = `${consolidated_weather[0].weather_state_name}`;
  c('#img').src = `https://www.metaweather.com/static/img/weather/${consolidated_weather[0].weather_state_abbr}.svg`;
  c('#temperatura').innerHTML = `Temperatura: ${consolidated_weather[0].the_temp.toFixed(0)}°`;
  c('#min-temp').innerHTML = `Mínima: ${consolidated_weather[0].min_temp.toFixed(0)}°`;
  c('#max-temp').innerHTML = `Máxima: ${consolidated_weather[0].max_temp.toFixed(0)}°`;

}


//--------------------------------INCLUINDO UM DATE --------------------------------------------
const data = new Date();
const opcoes = {
  dateStyle: 'full',
};
c('#data').innerHTML = data.toLocaleDateString('pt-BR', opcoes);


