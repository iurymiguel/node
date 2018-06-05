function NoticiasDAO(connection){
  //Usa _ antes do atributo na classe como boa prática.
  this._connnection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback){
  this._connnection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (callback) {
  this._connnection.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._connnection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function () {
  return NoticiasDAO;
}