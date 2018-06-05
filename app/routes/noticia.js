// var dbConnection = require('../../config/dbConnection');

//Exporta o comando abaxio para ser usado em outro ponto do projeto.
//app deve ser passado como parametro, pois é o app lá do módulo server.js
module.exports = function (application) {

  //Método get na página principal '/noticias'
  application.get('/noticia', function (req, res) {

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function (error, result) {
      res.render("noticias/noticia", { noticias: result });
    });

    // var x = 1;
    // connection.query(`select * from noticias where id_noticia = ${x}`, );

  });
}