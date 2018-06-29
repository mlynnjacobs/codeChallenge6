var input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

var sInput = input.sort(function (a, b) { return a - b });

var endArray = [];

var storeArray = [];

sInput.forEach(function (value, i) {
    if (value === sInput[i + 1]) {
        storeArray.push(value);

    } else if (value === sInput[i - 1]) {
        storeArray.push(value);
        endArray.push(storeArray);
        storeArray = [];
    } else {
        endArray.push(value);
    };
});

console.log("last step", endArray);



