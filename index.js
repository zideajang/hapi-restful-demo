const Hapi = require('hapi');

//创建服务器
const server = new Hapi.Server();
//连接服务器
server.connection({ port: 8000, host: 'localhost' });
const tuts = 

  [
    {
      title: "nodejs basic tutorial",
      summary: "this is tutorial of basic nodejs"
    },
    {
      title: "nodejs basic tutorial1",
      summary: "this is tutorial1 of basic nodejs"
    },
    {
      title: "nodejs basic tutorial2",
      summary: "this is tutorial2 of basic nodejs"
    }
  ];

server.route({
  method: 'GET',
  path: '/tuts',
  handler: function(request, reply) {
    reply({ 'data' :  tuts });
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});