/* const array = ['Gabriel', 'Dalva', 'Cleide'];

console.log(array)

const matriz = [
    ['Mottu', 'Honda', 'XRE'],
    ['Gabriel', 'Dalva', 'Cleide'], 
    ['Servente', 'Contabilidade', 'Programador']
] 

function pirangueiro (nome) {
    console.log('Eae dazeria', nome)
}

pirangueiro ('Minekurt'); 

const elemento = fortal => console.log('Sou dazaria moro em', fortal);

elemento('Fortaleza')
*/

/* const factoryFunction = (name) => {
    return {
        logou: () => alert(`O usuario ${name} logou`),
        deslogou: () => alert(`O usuario ${name} deslogou`),
    }
}

factoryFunction ('Gabriel').logou();
factoryFunction ('Gabriel').deslogou();
 */

/* 
const pessoa = {
    nome: '',
    idade: 0
}

const pessoa1 = pessoa;
pessoa1.nome = 'Gabriel';
pessoa1.idade = 22

const pessoa2 = pessoa;
pessoa2.nome = 'Marlon';
pessoa2.idade = 27 */

/* function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

const pessoa1 = new Pessoa('Dalva', 22);

const pessoa2 = new Pessoa('Cleide', 28); */

/* function Game(){
    this.pulou = () => alert('O personagem pulou');
    this.deitou = () => alert('O personagem deitou');
}

Game.prototype.correu = () => alert('O persongaem correu');

const novoJogo = new Game();

const meuJogo = 'fifa'

console.log(meuJogo.toUpperCase()) */

/* class Mamifero {
    constructor(patas){
        this.patas = patas
        this.especie = 'Mamiferos'
    } 
    dormir() {
        alert('Esse mamifero dormiu')
    }
}

class Pessoa extends Mamifero {
    constructor(name, idade, cidade){
        super(patas);
        this.name = name;
        this.idade = idade;
        this.cidade = cidade;
    } 

    dormir() {
        super.dormir();
    }
    andou () {
        alert(`${this.name} Andou`)
    }
}


const pessoa1 = new Pessoa('Gabriel', 16, 'Fortaleza-ce');
const pessoa2 = new Pessoa('Desalmado', 26, 'Fortaleza-ce');
const pessoa3 = new Pessoa('Cleide', 25, 'Itapipoca');
const pessoa4 = new Pessoa('Dalva', 50, 'Teresina');
*/

/* const Pessoa = {
    nome: 'Gabriel',
    idade: 16,
    altura: 1.74,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    }
}

const {altura = 1.65} = Pessoa;

console.log(altura) */

/* const carros = ['Byd', 'Ram', 'Pegout'];

const [, segundoCarro, terceiroCarro ] = carros;

console.log(segundoCarro, terceiroCarro) */

/* function estados(ce, ...estados){
    console.log(ce, estados)
}

estados('CE', 'SP', 'RS', 'AM', 'PE' ) */

/* const carrosAltos = ['Ram', 'Hilux', 's10', 'pajero']
const carrosBaixos = ['hb20', 'gol', 'celta', 'corsa']

const carros = [...carrosAltos, ...carrosBaixos] */


/* const pessoa = {
    nome: 'Gabriel',
    idade: 16,
    profissao: 'Programador'
}

const endereco = { 
    pais: 'Brasil',
    estado: 'Ceara',
    cidade: 'Fortaleza'
}

const dados = {
    ...pessoa, ...endereco, altura: 1.65 
} */


/* const string = 'Linguagem JavaScript';
const string2 = 'de programação';

console.log(string.length)

console.log(string.charAt(5))

console.log(string.toLowerCase())

console.log(string.toUpperCase())

console.log(string.endsWith('JavaScript'))

console.log(string.startsWith('Linguagem'))

console.log(string.includes('Script'))

console.log(string.concat(string2))

console.log(string + string2)

console.log(`${string}${string2}`)

console.log(string.substring(1, 4))

console.log(string.slice(-10))

console.log(string.padStart(25, '.'))

console.log(string.padEnd(25, '.'))

console.log(string.split(' '))

console.log(string.replace('i', 'a')) */


/* const array = ['sexo', 'drogas', 'e rock and roll', 'sexo'];
const array2 = [1, 9, 4, 3, 2];


console.log(array.length)

console.log(array.unshift('Gol quadrado'))

console.log(array.shift())

console.log(array.push('Gol quadrado'))

console.log(array.pop())

console.log(Array.from())

console.log(Array.isArray(array))

console.log(array.join(' '))

console.log(array.concat(array2))

console.log(Array.of(1,2,3,4))

console.log(Array('ain', 'cigarinho'))

console.log(array.includes('sexo'))

console.log(array2.sort())

console.log(array.sort(() => {})) 

console.log(array2.reverse())

console.log(array.indexOf('drogas'))

console.log(array.lastIndexOf('sexo'))

console.log(array) */



/* const estoque = ['arroz', 'feijao', 'arroz', 'macarrao', 'batata', '']
const precos = [3.50, 5, 3.50, 2, 2.50, 0]
const pessoa = [{nome: 'Gabriel', idade: 16}, {nome: 'Cleide', idade:25}]

pessoa.forEach((valor, index, array) => {
    console.log(valor.nome, index, array)
})

const retornoMap = estoque.map((valor, index, array) => {
    return `${valor} ${index}`
})

const total = precos.reduce((acc, valor, index, array) => {
    return acc + valor
}, 0)

const resultado = estoque.find((valor, index, array) => {
    return valor;
})

const resultado0 =estoque.findIndex ((valor, index, array) => {
    return valor;
})

const boolean = estoque.some ((valor, index, array) => valor);

const every = estoque.every((valor, index, array) => valor);

const filter = estoque.filter((valor, index, array) => valor === 'arroz');
 */

/* const dados = {
    nome: 'Gabriel',
    idade: 16
}

const profissao = {
    nane: 'Programador',
    stack: 'javascript'
}

const emdereco = {
    cidade: 'Fortaleza',
    estado: 'CE',
    ...dados,
    ...profissao
}git@github.com:Kurtgabriel1220/Js-gustavo-Campelo.git

console.log(Object.values(dados)) 
 */                  



/* let botaoProximo = document.querySelector(".proximo")
let botaoAnterior = document.querySelector('.anterior')
let slider = document.querySelectorAll('img')

let contador = 0 

console.log(document.querySelector('.ativo').classList)

botaoProximo.onclick = function nextSlider(){
    document.querySelector('.ativo').classList.remove('ativo')

    if(contador < 2) {
        contador = contador + 1
        
    }else{
        contador = 0
    }


    console.log(contador)

    slider[contador].classList.add('ativo')
}

botaoAnterior.onclick = function backSlider(){
    document.querySelector('img.ativo').classList.remove('ativo')    
    if(contador > 0 ){
        contador = contador - 1
    }else{
        contador = 2
    }
    slider[contador].classList.add('ativo')
    
} */


/*

const numero = 10
const string = '20.9'
const numeroQuebrado = 10.8


console.log(Number.parseFloat(string))

console.log(Number.parseInt(string, 2))

console.log(numeroQuebrado.toFixed(2))

console.log(numero.toString())

console.log() */



/* console.log(Math.abs(1.6))

console.log(Math.ceil(2.4))

console.log(Math.floor(2.50))

console.log(Math.round(2.50))

console.log((Math.random() * 1000).toFixed())


console.log(Math.max(2, 5, 100, 1034804))

console.log(Math.min(1, 0, 200, 20))
 */


/* const hoje = new Date();

console.log(hoje.getDate())

console.log(hoje.getMonth())

console.log(hoje.getFullYear())

console.log(hoje.getHours())

console.log(hoje.getMinutes())

console.log(hoje.getDay())
 */



/* 
function teste() {

}

if() {
    
}

for() {

}

console.log(); */


/* const string = 'tring'

console.log(typeof string, string)

const nuember = 19

console.log(typeof nuember, nuember)

const nueber = null;

console.log(typeof nueber, nueber)

let semAmorproprio;

console.log(typeof semAmorproprio, semAmorproprio)

const numero4 = true
const numero5 = false

console.log(`O tipo de ${numero4} E ${typeof numero4}`)
console.log(typeof numero5, numero5)console.log(`O tipo de ${numero4} E ${typeof numero4}`)z */

/* function teste1() {
    valor = 'gabriel';
}

console.log(valor);

if () {
    const
    let
}

for(let i = 1) {

}
*/


/* Sincrono, Assincrono e promise. */


/* const minhaPromise = new Promise((resolve, reject) => {
    let condicao = false;



    if(condicao){
        resolve('Tudo certo xara')
    } else {
        reject('Tudo errado xara')
    }
}) 

minhaPromise.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
}) */

/* 
fetch('https://api.coingecko.com/api/v3/exchange_rates', {
    mode: 'cors',
    method: 'POST', 
    body:{
        name: 'Gabriel',
        age: 16,
        loc: "Fortaleza-CE"
    },
    headers:{

    }
}).then((data) => {
    console.log(data)
})
 */
/* 
const obj = '{"name": "Gabriel", "age": 16}'
const obj2 = {
    nome: 'Dalva',
    idade: 'Cleide'
}


console.log(JSON.parse(obj))
console.log(JSON.stringify(obj2)) */

/* fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
    console.log(data)
}) */

/* Outra maneira de fazer a mesma coisa so que de forma mais "limpa" */

/* async function getCoinData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await data.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

getCoinData();


fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
    console.log(data.json().then((json) => {
        console.log(json);
    }))
}).catch((error) => {
    console.log(error)
    }) */

/* window.localStorage.setItem('name', 'Gabriel');
window.localStorage.setItem('age', 16);
window.localStorage.setItem('endereco', 'Fortaleza-CE');
window.localStorage.setItem('educacao', 'Ensino Superior');


console.log(window.localStorage.getItem('name'));
console.log(window.localStorage.getItem('age'));
console.log(window.localStorage.getItem('endereco'));
console.log(window.localStorage.getItem('educacao')); 
 */
/* window.sessionStorage.setItem('name', 'Gabriel');
window.sessionStorage.setItem('age', 16);
window.sessionStorage.setItem('endereco', 'Fortaleza-CE');
window.sessionStorage.setItem('educacao', 'Ensino Superior');


console.log(window.sessionStorage.getItem('name'));
console.log(window.sessionStorage.getItem('age'));
console.log(window.sessionStorage.getItem('endereco'));
console.log(window.sessionStorage.getItem('educacao')); */

/* 
document.cookie = 'name=Gabriel' */

import alerta from './module.js';
import { calc } from './calc.js';

alerta();
console.log(calc(5, 10));
