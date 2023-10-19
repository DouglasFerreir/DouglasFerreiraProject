// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const GatoModelo = mongoose.model('Gato', {
//     raca: String,
//     idade: Number,
//     cor: String
// })

// const gatoQueAcheiNaRua = new GatoModelo({
//     raca: "Siames",
//     idade: 3,
//     cor: "Branco"
// })

// gatoQueAcheiNaRua.save().then(() => console.log("Gato salvo com sucesso"))




// exercicio realizado no dia 18 / 10 / 2023

// modelo de produto
// codigo de barra - string ou Number
// nome - string
// preço - number

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model('produto',{
    codigoDeBarra: Number,
    nome: String,
    preço: Number
})

const detergente = new Produto({
    codigoDeBarra:123456789 ,
    nome: "detergente",
    preço: 5
})

detergente.save()

console.log("Olá")


Produto.find


async function exibeProdutos() {
  console.log(await Produto.find)) 
}
exibeProdutos()