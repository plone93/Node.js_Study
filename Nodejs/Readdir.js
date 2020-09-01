var testFolder = './Syntax';//실행위치, Syntax폴더 안에 있는 파일을 배열로 읽어옴
var fs = require('fs');
 
fs.readdir(testFolder, function(error, fileList){
  console.log(fileList);
})