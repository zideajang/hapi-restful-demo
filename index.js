const Hapi = require('hapi');

//创建服务器
const server = new Hapi.Server();
//连接服务器
server.connection({ port: 8000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/api',
  handler: function(request, reply) {
    reply({ 'api' : 'hello!' });
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});