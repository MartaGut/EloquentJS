// Your code here.
function range(start, end) {
    var arr=[];
    if(start<end){
    
  for (var i=start; i<=end; i++) {
  arr.push(i) }
    return arr
  }
    else {
    for (i=start; i>=end; i--) {
      arr.push(i)
      }
      return arr
    }
  }
  var all=0;
  function sum(x){
    for (c=0; c<x.length; c++){
    all+=x[c]
    }
    return all
  }
  
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55