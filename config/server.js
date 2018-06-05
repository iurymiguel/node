var express = require('express'); //Retorna a função do framework express
var consign = require('consign');

var app = express(); //Executa a função recuperada acima.

app.set('view engine', 'ejs'); //ejs vai ser o motor de geração de views html.
//Diz que as views estão na pasta esepcificada.
app.set('views', './app/views'); //Caminho de onde esse módulo está sendo usado.

//pega os modulos da pasta routes para aplicação.
//Com isso, não precisa fazer os requires das rotas em app.js.
consign()
  .include('app/routes')
  //Assim que acontece o auto load, a funcão do módulo abaixo é executada se estiver no exports.
  .then('config/dbConnection.js') //precisa apontar a extensão, especificando o módulo.
  .then('app/models') //carrega as models.
  .into(app);

module.exports = app;