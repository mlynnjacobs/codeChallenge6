var input = [1, 2, "2", 4, 591, "10", "591", 392, 391, 2, 5, 10, 2, 1, "10",1, 1, "15", 20, 20];

var stringArray = input.filter(function(value){
    return typeof value === "string"; 
 }).sort();
var numArray = input.filter(function(value){
   return typeof value === "number"; 
}).sort(function(a,b){return a-b});

let endArray = [stringArray, numArray] 
console.log(endArray);



