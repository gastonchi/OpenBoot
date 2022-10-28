// Factorial 10 

//FOR
let rdoFor = 1;

for (let index = 1; index < 10; index++) {
    
    rdoFor+=index*rdoFor
    
}

console.log(rdoFor);


// WHILE
let rdoWhile = 1;
let i = 1;
while( i < 10){


    rdoWhile+=i*rdoWhile
    i++;


}
console.log(rdoWhile);


// BREAK

let rdoBreak = 1;
let j = 1;
while( j < 100){

    if(j===10){
        break;
    }

    rdoBreak+=j*rdoBreak
    j++;

}
console.log(rdoBreak);


