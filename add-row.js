const { GoogleSpreadsheet } = require('google-spreadsheet')

const credencials = require('./credencials.json')

const doc = new GoogleSpreadsheet('1Yeh83fHZ6dmjmH1I-YWPKbcGBa0qnRjuEvTcmRVhgno')

const run = async() => {
    try{
        await doc.useServiceAccountAuth(credencials);
        await doc.loadInfo();
        console.log(doc.title);

        const sheet = doc.sheetsByIndex[0]
        // Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome: 'Wanderson Oliveira',
            Email: 'wanderson_fla10@hotmail.com',
            Whatsapp:'61 981474383',
            Cupom: 'GOLD10',
            Promo:'ESSA É A PROMO'

        })
    }catch(err) {
        console.log(err);
    }
}

run()