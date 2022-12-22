const request = require('request');
const cheerio = require('cheerio');
//first
request('https://pof-usa.com/firearm/revolution/', (error,response, html) => {

  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const firearmPrices = $('.ct-text-block hi-firearm-price')
    
    
    console.log(firearmPrices.html());
  }
});