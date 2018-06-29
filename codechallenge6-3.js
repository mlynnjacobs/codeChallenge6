// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function autodect the formats so that 
// if you enter HEX color format it returns RGB and if you 
// enter RGB color format it returns HEX. Bonus: Release 
// this tool as a npm package.
"use strict";

const hex_lett = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

function initializeConversion() {
    let input = prompt("Enter your color code:");
    if (input.length === 6) {
        let hexInput = input.toUpperCase();
        convertHex(hexInput);

    } else {
        let rgbInput = input.split(",").map(Number);
        convertRgb(rgbInput);
    }
}

// HEX to RBG Conversion:
function hexSlicer(hex_num) {
    let red = [hex_num.slice(0, 1), hex_num.slice(1, 2)];
    let green = [hex_num.slice(2, 3), hex_num.slice(3, 4)];
    let blue = [hex_num.slice(4, 5), hex_num.slice(5, 6)];
    let colors = red.concat(green, blue);
    return (colors);
}

function hexToDec(hex_colors) {
    let dec_colors = []
    for (let i = 0; i < 6; i++) {
        if (Object.keys(hex_lett).includes(hex_colors[i])) {
            dec_colors.push(hex_lett[hex_colors[i]]);
        } else {
            dec_colors.push(Number(hex_colors[i]));
        }
    }
    
    return dec_colors;
}

function decToRGB(dec_colors) {
    let rgb = [];
    for (let i = 0; i < 5; i += 2) {
        rgb.push(Number(dec_colors[i]) * 16 + Number(dec_colors[i + 1]));
    }
    
    return rgb;
}

function convertHex(hexInput) {
    let colors = hexSlicer(hexInput);
    let decimals = hexToDec(colors);
    let result = decToRGB(decimals);
    console.log(result);
    return result;
}

//Convert RGB to Hex
function rgbToDec(rgbInput) {
    let rawNums = [];
    for (let i = 0; i < 3; i++) {
        let num = Number(rgbInput[i])
        rawNums.push(Math.floor(num / 16));
        rawNums.push(Math.floor(num % 16));
    };
    return rawNums;
}

function decToHex(array) {
    for (let key in hex_lett) {
        for (let i = 0; i < 6; i++) {
            if (hex_lett[key] === array[i]) {
                array[i] = key;
            }
        }
    } return array.join("");
}

function convertRgb(rgbInput) {
    let value = rgbToDec(rgbInput);
    let result = decToHex(value);
    console.log(result);
    return result;
}

initializeConversion();