const { GoogleSpreadsheet } = require('google-spreadsheet')
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
