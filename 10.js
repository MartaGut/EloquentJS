// Your code here.
function deepEqual(a, b) {
    if (a === b) {
    return true}
      
      if ( a == null ||  a != "object" || b == null || b !="object" ) {
      return false
      }
      
      var A = Object.keys(a);
      var B = Object.keys(b);
      
      if (A == B) {
      return true}
    }
    
    let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
    // → false
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    // → true