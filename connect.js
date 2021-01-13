const { GoogleSpreadsheet } = require('google-spreadsheet')

const credencials = require('./credencials.json')

const doc = new GoogleSpreadsheet('1Yeh83fHZ6dmjmH1I-YWPKbcGBa0qnRjuEvTcmRVhgno')

const run = async() => {
    try{
        await doc.useServiceAccountAuth(credencials);
        await doc.loadInfo();
        console.log(doc.title);

    }catch(err) {
        console.log(err);
    }
}

run()