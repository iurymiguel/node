// var dbConnection = require('../../config/dbConnection');

//Exporta o comando abaxio para ser usado em outro ponto do projeto.
//app deve ser passado como parametro, pois é o app lá do módulo server.js
module.exports = function (application) {

  //Método get na página principal '/noticias'
  application.get('/noticias', function (req, res) {

    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function (error, result) {
      res.render("noticias/noticias", { noticias: result });
    });

    //Renderiza uma pagina HTML no arquivo noticias.ejs 
    //res.render("noticias/noticias"); //pode ocultar a extensão do arquivo.
  });
}