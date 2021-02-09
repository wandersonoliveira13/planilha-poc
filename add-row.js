const { GoogleSpreadsheet } = require('google-spreadsheet')
const credencial = require('./credencial.json')

const doc = new GoogleSpreadsheet('1Yeh83fHZ6dmjmH1I-YWPKbcGBa0qnRjuEvTcmRVhgno')
const run = async() => {
    try {
        await doc.useServiceAccountAuth(credencial)
        await doc.loadInfo() 
        
        const sheet = doc.sheetsByIndex[0]

        await sheet.addRow({
            Nome: 'Helloysa Campos',
            Email: 'loysa@gmail.com',
            Whatsapp: '6199999999',
            Cupom: 'hello10',
            Promo: 'ganhou isso'
        })

    } catch (err) {
        console.log(err)
    }
}

run()
