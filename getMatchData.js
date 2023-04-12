const axios = require('axios');

var options = {
  method: 'GET',
  url: 'https://be-prod.rib.gg/v1/series',
  params: { take: '200' },
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
    const newMatches = matches.filter(item => (
      item.startDate = new Date(item.startDate).toLocaleString()
    ));
    return newMatches;
  }
  catch (error) {
    console.error(error)
  }
}

module.exports = getMatchData;