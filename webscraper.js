const request = require('request');
const cheerio = require('cheerio');

request('https://pof-usa.com/firearm/revolution/', (error,response, html) => {

  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const firearmPrices = $('<div id="div_block-822-54176" class="ct-div-block hi-firearm-variant-info"><div id="text_block-823-54176" class="ct-text-block hi-firearm-price"><span id="span-829-54176" class="ct-span">2924</span></div><div id="text_block-824-54176" class="ct-text-block hi-firearm-part-number"><span id="span-831-54176" class="ct-span">01467 (16.5")</span></div></div>');
    
    
    console.log(firearmPrices.html());
  }
});