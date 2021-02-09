const { GoogleSpreadsheet } = require('google-spreadsheet')
const credencial = require('./credencial.json')

const doc = new GoogleSpreadsheet('1Yeh83fHZ6dmjmH1I-YWPKbcGBa0qnRjuEvTcmRVhgno')
const run = async() => {
    try {
        await doc.useServiceAccountAuth(credencial)
        await doc.loadInfo() 
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[1]

        await sheet.loadCells('A3:B3')
        console.log(sheet.title)

        const mostraPromocaoCell = sheet.getCell(2,0)
        console.log(mostraPromocaoCell.value)
        
        const textoCell = sheet.getCell(2,1)
        console.log(textoCell.value)
        
    } catch (err) {
        console.log(err)
    }
}

run()
