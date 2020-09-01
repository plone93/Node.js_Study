var arr = ['A','B','C','D'];
console.log(arr[1]);
console.log(arr[3]);
arr[2] = 3;
console.log(arr);
console.log(arr.length);
arr.push('E');
console.log(arr);

//배열 반복
var number = [1,400,12,34];
var i = 0;
var total = 0;
while(i < number.length){
  total = total + number[i];
  i = i + 1;
}
console.log(`total : ${total}`);