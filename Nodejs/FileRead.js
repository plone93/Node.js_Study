var fs = require('fs');//파일 시스템 모듈(api)을 불러옴
fs.readFile('sample.txt', 'utf8', function(err, data){//파일이름, 인코딩, 함수
  console.log(data);
});