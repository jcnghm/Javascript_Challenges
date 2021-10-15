// Function to check for valid parenthesis pairs

function validParentheses(string){
    var tokenizer = /[()]/g, 
        count = 0,         
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
 }