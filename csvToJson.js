const csv = require('csvtojson');
const fs = require('fs');

async function convertCsvToJson(){
    try{
        const jsonArray = await csv().fromFile('ORIGINAL/netflix.csv');
        createJsonFile(JSON.stringify(jsonArray));
    }catch(err){
        console.log(`${err}`);
    }
}

function createJsonFile(jsonData){
    fs.writeFile('CONVERTED/netflix.json', jsonData, () => {
        console.log('The json file was saved');
    });
}

convertCsvToJson();
