const express = require('express'); 
const puppeteer = require('puppeteer');
const server = express();

server.get('/', async (req, res) => {
    let textContent;

    try{
        const browser = await puppeteer.launch( {headless: true} );
        const page = await browser.newPage();
        await page.goto('https://p2p.binance.com/pt-BR/trade/sell/USDT?fiat=ARS&payment=MercadoPagoNew', );
        
        await page.waitForSelector('.css-1m1f8hn', { timeout: 8000 });
        
        const valor = await page.$('.css-1m1f8hn');
        textContent = await (await valor.getProperty('textContent')).jsonValue();
        console.log('valor:', textContent); 
        await browser.close();
    
    } catch (error){
        console.error('Erro ao buscar o valor em Pesos ARS', error);
        textContent = "Não foi possível encontrar o valor correto"
    }

    res.send({
        "Pesos ARS": textContent
    });
});

const PORT = 3200;

server.listen(PORT, () => {
    console.log("Já está funcionando")
})