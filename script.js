// SOUCE OF CHARACTERS
const letters = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m', 'n', 'o','p', 'q', 'r','s', 't', 'u','v', 'w', 'x', 'y', 'z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const symbols = ['!','@','$','#','%','^','&','*','(',')','-','_',];

const allchar = [letters, numbers, symbols];
let passwordList = [];

// ENTER THE SIZE OF PASSWORD HERE
const size = prompt("Enter the size to password:");

// MIXING THE CHARACTERS HERE
let p;
for (let i=0; i<=size; i++){
    let q = Math.floor((Math.random()*3))
    if(q == 0){
     p = Math.floor((Math.random()*26))
    } else if (q == 1){
        p = Math.floor((Math.random()*10))
    }   else {p = Math.floor((Math.random()*12))}
    
    passwordList.push(allchar[q][p])
}

// CONVERTING ARRAY INTO STRING
const password = passwordList.join("");

console.log(password);