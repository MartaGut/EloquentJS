let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// → [1, 2, 3, 4, 5, 6]