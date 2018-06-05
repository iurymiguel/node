module.exports = function (application) {
  //Método get na página principal '/formulario_inclusao_noticia'
  application.get('/formulario_inclusao_noticia', function (req, res) {
    //Renderiza uma pagina HTML no arquivo form_add_noticia.ejs 
    res.render("admin/form_add_noticia"); //pode ocultar a extensão do arquivo.
  });

  //Requisicao do tipo post
  application.post('/noticias/salvar', function (req, res) {

    //Quando um post é feito, o express popula a propriedade body da requisção com os dados enviados.
    var noticia = req.body;
    //Renderiza uma pagina HTML no arquivo form_add_noticia.ejs 
    // res.send(noticia); //pode ocultar a extensão do arquivo.

    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function (error, result) {
      res.redirect('/noticias'); //Redireciona para lista de noticias.
    });



  });
}