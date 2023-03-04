const {parse} = require('json2csv');
const fs = require('fs');

function convertJsonToCsvEmojis(){
    try{
        const fileData = fs.readFileSync('ORIGINAL/emojis.json');
        const csv = parse(JSON.parse(fileData)); //Receives an object
        createCsvFile(csv, 'emojis');
    }catch(err){
        console.log(`ERROR: ${err}`);
    }
}

function convertJsonToCsvLatestBlock(){
    try{
        const fileData = fs.readFileSync('ORIGINAL/latestblock.json');
        const parseData = JSON.parse(fileData);
        const txIndexes = parseData.txIndexes;

        const data = txIndexes.map(item => ({index: item, randomString: 'Filling string'}));
        const csvData = parse(data); //Parse receives an array of objects to parse it
        createCsvFile(csvData, 'latestblock');
    }catch(err){
        console.log(`ERROR: ${err}`);
    }
}

function convertJsonToCsvOpenSource(){
    try{
        const fileData = fs.readFileSync('ORIGINAL/opensource.json');
        const parseData = JSON.parse(fileData);

        const data = parseData.map(item => ({
            id: item.id, 
            identifier: item.identifiers[0],
            link: item.links[0].url,
            name: item.name,
            media_type: item.text[0].media_type
        }));

        const csvData = parse(data);

        createCsvFile(csvData, 'opensource');

    }catch(err){
        console.log(`ERROR: ${err}`);
    }
}

function createCsvFile(csvData, filename){
    fs.writeFile(`CONVERTED/${filename}.csv`, csvData, () => {
        console.log('The csv file was saved');
    });
}


