// Load in day two data
const readline = require('readline');
const fs = require('fs')


const invalidColors = {
    red: 12,
    green: 13,
    blue: 14
}

function getData(filename) {
    const data = fs
    .readFileSync(filename)
    .toString('utf-8')
    .split('\r\n');

    return data
}


let data = getData('data/dayTwo.txt')

// console.log(data)

let invalidGames = [];
let totalInvalidIds = 0;

let validGames = [];
let validIds = 0;

checki: for(let i = 0; i < data.length; i++){

    //game format `Game 85: 3 red, 7 green, 8 blue; 3 blue, 17 green, 7 red; 13 green, 4 blue; 6 blue, 8 green`

    //Split around :


    var[gameName, gameData] = data[i].split(':')
    var gameId = parseInt(gameName.split(' ')[1])
    let rounds = gameData.split(';');


     for( let x = 0; x < rounds.length; x++){
       
        //round format `4 green, 2 blue; 1 red, 1 blue, 4 green`

        let sets = rounds[x].split(',');

        for( let y = 0; y < sets.length; y++){
            // set format `4 green` 
            
            var[setNumber, setColor] = sets[y].trim().split(' ');

            // console.log(rounds)

            if(invalidColors[setColor] < setNumber){
                
                invalidGames.push(gameId)
                totalInvalidIds = totalInvalidIds + gameId
                continue checki;
            }            
        }
    }

    validGames.push(gameId)
    validIds = validIds + gameId
}

console.log(validGames)
console.log(validIds)
