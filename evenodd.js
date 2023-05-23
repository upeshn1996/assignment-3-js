var readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number:");
if(num%2==0){
console.log("you enterd number is even number")
}
else{
    console.log("you enterd number is odd number")
}