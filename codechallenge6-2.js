// In order to make this function more flexible,
// one can comment out line 14 and uncomment lines
// 8 & 15-17 in order to make the result display
// an array of pair arrays that make the target if
// there are more than one resulting pair.

var result = [];
// var pair = [];

function Adder(array, target) {
    for (var i=0; i < array.length; i++) {
        for (var j=i+1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                result.push(array[i],array[j]);
                // pair.push(array[i],array[j]);
                // result.push(pair);
                // pair = [];
            };
        };
    };
    console.log(result);
}; 

Adder([1,2,3], 4);

Adder([0,1,2,3,4,5,6,7], 7);