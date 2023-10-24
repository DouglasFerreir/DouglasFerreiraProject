const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const inventarioProdutos = [
    {nome:"smartphone", preco:5000, fabricante:"Samsung" },
    {nome: ventilador, preco: 100, fabricante: "Mondial" },
    {nome: cadeira, preco: 250, fabricante: "Tok Stok"}
]

const produtos = mongoose.model('produtos',{
    nome: String,
    preco: Number,
    fabricante: String,
    
  })
   

  Produtos.create({
    nome: "Smartphone",
   preco: 5000,
    fabricante: "Samsung",
  })

  Produtos.create({
    nome: "Ventilador",
   preco: 100,
    fabricante: "Mondial",
  })

  Produtos.create({
    nome: "Cadeira",
   preco: 250,
    fabricante: "Tok Stok",
  })

async function buscaTodosOsProdutos() {
    console.log(await Produto.find())
}
  
buscaTodosOsProdutos()
  
console.log("Salvo no acervo de Produtos")