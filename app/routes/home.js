module.exports = function (app) {
  //Método get na página principal '/'
  app.get('/', function (req, res) {
    //Renderiza uma pagina HTML no arquivo index.ejs 
    res.render("home/index"); //pode ocultar a extensão do arquivo.
  });
}