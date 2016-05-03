function compress(string){
  var prev; 
  var compStr = '';
  var count = 1; 
  for (var i = 0; i < string.length; i++){
    if(prev === undefined){
      compStr += string[i];
      prev = string[i];
    } else if (string[i] === prev){
      count++; 
    } else {
      prev = string[i]; 
      compStr += count; 
      compStr += string[i];
      count = 1; 
    }
  }
  compStr += count;
  if (string.length > compStr.length){
    return compStr;
  } else {
    return string; 
  }
}

console.log(compress('aabbbcddd'));