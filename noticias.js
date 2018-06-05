var http = require('http'); //incorpora neste projeto a biblioteca http

//cria um servidor passando como parametro uma função que recebe como parametro
//requisição e resposta.
var server = http.createServer(function (req, res) {

  var categoria = req.url; //recupera a url dentro da aplicação.

  //A url raiz é localhost:3000, req.url devolve o que está depois do 3000.
  if (categoria == '/tecnologia') {
    res.end("<html><body>Noticias de Tecnologia</body></html>");
  } else if (categoria == '/moda') {
    res.end("<html><body>Noticias de Moda</body></html>");
  } else if (categoria == '/beleza') {
    res.end("<html><body>Noticias de Beleza</body></html>");
  } else {
    res.end("<html><body>Portal de Noticias</body></html>");
  }


});

//Escuta a porta 3000, que receberá a requisição.
server.listen(3000);