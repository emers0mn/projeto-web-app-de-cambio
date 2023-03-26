const express = require('express'); 
const puppeteer = require('puppeteer');
const server = express();

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

server.get('/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.westernunion.com/br/pt/web/send-money/start?ReceiveCountry=AR&ISOCurrency=ARS&SendAmount=1&FundsOut=BA&FundsIn=WUPay', );
    
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };
    
      await wait(60000);


    const valor = await page.$('#receiveAmount_1');
    const innerHTML = await (await valor.getProperty('innerHTML')).jsonValue();

    console.log('valor:', innerHTML);
    await browser.close();

    res.send({
        "Pesos ARS": innerHTML
    });
});

const PORT = 3200;

server.listen(PORT, () => {
    console.log("Já está funcionando")
})