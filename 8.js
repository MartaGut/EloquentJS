// Your code here.
function reverseArray(arr){
    let newarr=[];
      for (i=arr.length-1; i>=0; i-- ){
        newarr.push(arr[i]);
      }
      return newarr
    }
    
    function reverseArrayInPlace(rarr){
    for (let i=0; i <= Math.floor(rarr.length / 2); i++){
    var first = rarr[i]; //the first element equal to a variable called first
      rarr[i] = rarr[rarr.length - 1 -i]; //set the first element equal to the last
     rarr[rarr.length - 1 -i] = first; //and the last equal to the first 
    }
      return rarr
    };
    
    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]