const axios = require('axios');

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