var http = require('http');
var fs = require('fs');
//var url = require('url');// url이라는 모듈을 사용 할 것이다, require = 요구하다

var app = http.createServer(function(request,response){
    var url = request.url;
   // var queryData = url.parse(_url, true).query;
   // console.log(queryData);

    if(url == '/'){
      url = '/index.html';
    }
    if(url == '/favicon.ico'){
      //return response.writeHead(404);
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));
  
    //response.end(queryData.id);
 
});
app.listen(3000);