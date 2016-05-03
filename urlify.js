

function urlify(string, length){
  var urlString = '';
  for (var i = 0; i < length; i++){
    if (string[i] !== " ") {
      urlString += string[i];
  } else if (string[i] === " "){
    urlString += "%20";
  }
  } 
return urlString;
}

console.log(urlify("Mr John Smith   ", 13));