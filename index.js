const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Filme = mongoose.model('filme',{
    titulo: String,
    genero: String,
    distribuidora: String,
    produtora: String
  })
   
  // Filme.create({
  //   titulo: "EuseiOqueVocesFizeramNoVeraoPassado",
  //   genero: "Terror",
  //   distribuidora: '001',
  //   produtora: "ColumbiaPictures"
  // })

async function buscaTodosOsFilmes() {
    console.log(await Filme.find())
}
  
buscaTodosOsFilmes()
  
console.log("Salvo no acervo de filmes")