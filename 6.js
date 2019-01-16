// Your code here.
function countChar(string, letter) {
    var count = 0;
  for (i=0; i<string.length; i++) {
    if (string[i] == letter) {
     count=count+1}
    }
    return count
  }
  
  function countBs(string) {
    return countChar(string, 'B')
  }
  
  function countBss(string) {
    var counting = 0;
  for (j=0; j<string.length; j++) {
    if (string[j] == 'B') {
     counting=counting+1}
    }
    return counting
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countBss("BBC"));
  console.log(countChar("kakkerlak", "k"));
  // → 4