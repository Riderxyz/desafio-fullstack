const restify = require('restify');
const server = restify.createServer();
const cursos = require('./api/controllers/cursos.controller');
var login = require('./api/controllers/login.controller');

server.name = 'Celso Lisboa'

/* server.get('/mensagem/:nome', temNome, resposta); */

server.post('/login/usuario/:usuario/senha/:senha', login.doLogin)
server.post('/login/verificarToken', login.verifyLogin)
server.get('/cursos/listar', cursos.listarCurso)
server.get('/cursos/getgrafico', cursos.grafico)

server.listen(3000, () => {
  console.log("Servidor em pé", server.name + '----' + server.url);

});