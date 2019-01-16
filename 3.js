// Your code here.
let size = 8;
let lines = "";
for(let i=0; i<size; i++){
    for (let j=0; j<size; j++){
    if ((i+j)%2==0) {
      lines +=' '}
      else{
      lines += "#"}
    }
  lines += '\n';
  }
console.log(lines)