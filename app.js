// var msg = require('./mod_teste');//Incorpora o módulo mod_teste

var app = require('./config/server'); //Recupera as configurações do servidor usando módulo.

// var rotaNoticias = require('./app/routes/noticias'); //Retorna a função sem executá-la, vinda do módulo.
// //ou var rotaNoticias = require('./app/routes/noticias')(app) e não precisa do código abaixo.
// rotaNoticias(app); //Executa a função recuperada acima.

// var rotaHome = require('./app/routes/home');
// rotaHome(app);
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
// rotaFormInclusaoNoticia(app);

//Escuta a porta 3000
app.listen(3000, function(){
  // console.log(msg()); //No caso, msg é uma função vinda do módulo.
  console.log('Servidor ON');
 
});


// //Método get na página principal '/'
// app.get('/', function(req,res){
//   res.send("<html><body>Portal de Noticias</body></html>");
// });



