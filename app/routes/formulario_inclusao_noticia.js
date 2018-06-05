module.exports = function (app) {
  //Método get na página principal '/formulario_inclusao_noticia'
  app.get('/formulario_inclusao_noticia', function (req, res) {
    //Renderiza uma pagina HTML no arquivo form_add_noticia.ejs 
    res.render("admin/form_add_noticia"); //pode ocultar a extensão do arquivo.
  });
}