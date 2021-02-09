const { GoogleSpreadsheet } = require('google-spreadsheet')
<<<<<<< HEAD
const credencial = require('./credencial.json')

const doc = new GoogleSpreadsheet('1Yeh83fHZ6dmjmH1I-YWPKbcGBa0qnRjuEvTcmRVhgno')
const run = async() => {
    try {
        await doc.useServiceAccountAuth(credencial)
        await doc.loadInfo() 
        console.log(doc.title)

    } catch (err) {
        console.log(err)
    }
}

run()
=======

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
>>>>>>> 17076ee00fe3a226f5599ee80f87f3448560b276
