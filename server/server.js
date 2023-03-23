const express = require('express'); 
const puppeteer = require('puppeteer');
const server = express();

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

server.get('/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.westernunion.com/br/pt/web/send-money/start?ReceiveCountry=AR&ISOCurrency=ARS&SendAmount=1&FundsOut=BA&FundsIn=WUPay', );
    page.waitForSelector('#smoExchangeRate').outerText
    const valor = await page.evaluate(() => {
        return {
            title: document.querySelector("#smoExchangeRate")
        };
    });

    console.log('valor:', valor);
    await browser.close();

    res.send({
        "Pesos ARS": valor.title
    });
});

const PORT = 3200;

server.listen(PORT, () => {
    console.log("Já está funcionando")
})