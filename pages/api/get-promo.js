import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)



export default async(req, res) => {

    try {
        
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A6:B6')        

        const mostrarPromocaoCell = sheet.getCell(5, 0)        

        const textoCell = sheet.getCell(5, 1)    
        
        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value ==='VERDADEIRO',
            message: textoCell.value
        }))
        
    } catch (error) {
        
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
    
}