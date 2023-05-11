function cleanString(s) {
  const stack = [];
  for (const char of s) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}
console.log(cleanString("abc#d##c"));      
console.log(cleanString("abc##d######"));  
console.log(cleanString("#######"));       
console.log(cleanString(""));              
