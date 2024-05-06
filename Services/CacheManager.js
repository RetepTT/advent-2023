import fs from "fs";

export default class CacheManager {

    getJson(key) {
        if (fs.existsSync(`cache/${key}.json`)) {
            // console.log("Reading from file");
            return this.readJsonFile(`cache/${key}.json`);
        }

        return null
    }

    setJson(key, value) {
        fs.writeFile(`cache/${key}.json`, JSON.stringify(value), function (err) {
            if (err) throw err;
            // console.log('Saved!');
        });
    }

    readJsonFile(filePath) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
}