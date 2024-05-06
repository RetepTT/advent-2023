import fs from "fs";
import csv from "csv-parser";

export default class UtilityService {
     startDateTime = new Date();

    setProgressStartDateTime() {
        this.startDateTime = new Date();
    }

     logProgressTime(i, length) {
        console.clear();
        var currentTime = new Date();
        console.log("Progress: " + Math.round((i/length) * 100) + "%");
        console.log("Time elapsed: " + (currentTime - this.startDateTime) / 1000 + " seconds");
        //give estimated time remaining
        var timeElapsed = (currentTime - this.startDateTime) / 1000;
        var timePerTicket = timeElapsed / (i + 1);

        var timeRemaining = timePerTicket * (length - i);
        //round to 2 decimal places
        timeRemaining = Math.round(timeRemaining * 100) / 100;
        console.log("time per pass: " + timePerTicket + " seconds")
        console.log("Estimated time remaining: " + Math.round(timeRemaining / 60) + " minutes");
    }


    cleanJiraDate(date) {
        // let dateString1 = date; //ticket[lastUpdateString]);
        return date.slice(0, -18);
    }


    stripProjectCode(Code) {
        //Desired output is the alpha characters only
        return Code.split("-")[0];
    }

    isTrue(value) {
        if (value === "true" || value === "TRUE" || value === "True" || value === true || value === 1) {
            return true;
        } else {
            return false;
        }
    }

}