const axios = require('axios');
// const cheerio = require('cheerio');

var options = {
  method: 'GET',
  url: 'https://backend-prod.rib.gg/v1/series',
  params: { take: '100', minStartDate: '2022-02-06T13:06:48.327Z' },
  headers: {
    Connection: 'keep-alive',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '^\^'
  }
};

const getMatchData = async () => {
  try {
    const response = await axios.request(options)
    const matches = response.data.data
    return matches;
  }
  catch (error) {
    console.error(error)
  }
}

module.exports = getMatchData;

//  const url = 'https://www.vlr.gg/'
//  axios(url)
//  .then(response => {
//      const html = response.data
//      console.log(html)
//      const games = []

//      $('h-box-innter').each(function() {
//          const title =  $(this).text()
//          const url = $(this).find('a')
//          games.push({
//              title,
//              url
//          })
//      })
//      console.log(games)
//  }).catch(err => console.log(error))
// const matchData = async () => {
//     const response = await axios.get(url);
//     const html = response.data
//     const $ = cheerio.load(html)
//     const games = [];
//     const schedule = $('#wrapper > div.col-container > div')
//     schedule.find('match-item').each((i, element) => {
//         const $element = $(element);
//         console.log($element.text());
//     });
// }

// matchData()