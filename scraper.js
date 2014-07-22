var request = require('request');
var cheerio = require('cheerio');

var mpListUrl = 'http://www.parliament.nz/en-nz/mpp/mps/current?Criteria.ViewAll=1';

request(mpListUrl, function(error, response, html) {

  if(!error) {
    var $ = cheerio.load(html);
    $('tbody tr').each(function() {
      console.log($(this).text().trim());
    });
  }

});
