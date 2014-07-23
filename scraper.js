var request = require('request');
var cheerio = require('cheerio');

var mpListUrl = 'http://www.parliament.nz/en-nz/mpp/mps/current?Criteria.ViewAll=1';

request(mpListUrl, function(error, response, html) {

  if(!error) {
    var $ = cheerio.load(html);
    $('tbody tr').each(function() {
      var cells = $(this).children('td');
      var aTag = $(cells).first().find('a');
      var name = $(aTag).text();
      var link = 'http://www.parliament.nz' + $(aTag).attr('href');
      var electorateDetails = $(cells).last().text().trim();
      console.log(name);
      console.log(link);
      console.log(electorateDetails);
    });
  }

});
