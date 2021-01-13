const { GoogleSpreadsheet } = require('google-spreadsheet')

const credencials = require('./credencials.json')

const doc = new GoogleSpreadsheet('1Yeh83fHZ6dmjmH1I-YWPKbcGBa0qnRjuEvTcmRVhgno')

const run = async() => {
    try{
        await doc.useServiceAccountAuth(credencials);
        await doc.loadInfo();
        console.log(doc.title);
        
        const sheet = doc.sheetsByIndex[1]
        await sheet.loadCells('A3:B3')
        console.log(sheet.title)

        const mostrarPromocaoCell = sheet.getCell(2, 0)
        console.log(mostrarPromocaoCell.value)
        
        const mostrarTextoCell = sheet.getCell(2, 1)
        console.log(mostrarTextoCell.value)


    }catch(err) {
        console.log(err);
    }
}

run()