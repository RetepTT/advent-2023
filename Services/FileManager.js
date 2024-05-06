import fs from "fs";
import csv from "csv-parser";

export default class FileManager {
    saveJsonFile(key, value) {
        fs.writeFile(`cache/${key}.json`, JSON.stringify(value), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

    readJsonFile(filePath) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    readCSVFileAsStream(filePath) {
        return new Promise((resolve, reject) => {
            let results = [];
            let readStream = fs.createReadStream(filePath)
                // .pipe(csv())
                .on('data', (data) => results.push(data));


            readStream.on('end', () => {
                resolve(results);
            });

            readStream.on('error', error => {
                reject(error);
            });
        });
    }

    readFileAsStream(filePath){

        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);
        return data
    }
}