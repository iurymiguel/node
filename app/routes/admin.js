module.exports = function (application) {
  //Método get na página principal '/formulario_inclusao_noticia'
  application.get('/formulario_inclusao_noticia', function (req, res) {
    //Renderiza uma pagina HTML no arquivo form_add_noticia.ejs 
    res.render("admin/form_add_noticia",{validacao: {}, noticia: {}}); //pode ocultar a extensão do arquivo.
  });

  //Requisicao do tipo post
  application.post('/noticias/salvar', function (req, res) {

    //Quando um post é feito, o express popula a propriedade body da requisção com os dados enviados.
    var noticia = req.body;

    //passa o name do input e a mensagem de erro de validação.
    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres.').len(10,100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatória').notEmpty().isISO8601({format: 'YYYY-MM-DD'});
    req.assert('noticia','Noticia é obrigatória').notEmpty();

    var errors = req.validationErrors();
    console.log(errors);
    if(errors){
      res.render("admin/form_add_noticia",{validacao: errors, noticia: noticia});
      return;
    }

    //Renderiza uma pagina HTML no arquivo form_add_noticia.ejs 
    // res.send(noticia); //pode ocultar a extensão do arquivo.

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      res.redirect('/noticias'); //Redireciona para lista de noticias.
    });



  });
}