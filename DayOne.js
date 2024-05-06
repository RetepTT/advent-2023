// Load in day one data
const readline = require('readline');
const fs = require('fs')
// import fs from "fs";
// import readline from "readline";
// import FileManager from "./Services/FileManager.js";
//
// let filemanager = new FileManager();
// let data = await filemanager.readFileAsStream('data/dayOne.txt');
//
// // push li
// var length = data.length;
// console.log(length)
// for( let i = 0; i < length; i++){
//     console.log(data[i]);
// }

let numbers = [
    {
        numeric: 1,
        text: 'one',
    },
    {
        numeric: 2,
        text: 'two',
    },
    {
        numeric: 3,
        text: 'three',
    },
    {
        numeric: 4,
        text: 'four',
    },
    {
        numeric: 5,
        text: 'five',
    },
    {
        numeric: 6,
        text: 'six',
    },
    {
        numeric: 7,
        text: 'seven',
    },
    {
        numeric: 8,
        text: 'eight',
    },
    {
        numeric: 9,
        text: 'nine',
    },
]

function isCharNumber(c) {
    return c >= '0' && c <= '9';
}

function convertTextToNumerics(line) {
    var newline = line;
    for( let i = 0; i < newline.length; i++) {
        numbers.forEach((number) => {
            var numberTextLength = number.text.length

            var substring = newline.substring(i, i + numberTextLength);

            if(substring == number.text){
                // console.log('WeFoundit');

                newline = newline.replace(number.text, number.numeric)
                i=-1;
            }
        })
    }


    // numbers.forEach((number) => {
    //     newline = newline.replace(number.text, number.numeric)
    // })

    return newline;
}

function getDataAndCaclulate() {


    const readFileLines = filename =>
        fs
            .readFileSync(filename)
            .toString('UTF8')
            .split('\r\n');


// Driver code
    let arr = readFileLines('data/dayOne.txt');

    let numbers = [];
    let sum = 0;

    arr.forEach((line) => {
        // console.log(line);

        //convert any of the number texts to their numerics

        let parsedLine = convertTextToNumerics(line);

        let first = '';
        let last = '';

        for (let i = 0; i < parsedLine.length; i++) {

            if (isCharNumber(parsedLine[i])) {
                if (first === '')
                    first = parsedLine[i];

                last = parsedLine[i]
            }
        }
        console.log(first + last);

        sum = sum + parseInt(first + last)


    });

    return sum;
}

let sum = getDataAndCaclulate();
console.log(sum);


