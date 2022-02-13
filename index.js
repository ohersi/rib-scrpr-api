PORT = process.env.PORT || 8000;
const express = require('express');
const getMatchData = require('./getMatchData');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/matches', async (req, res) => {
    const matches = await getMatchData();
    res.json(matches);
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))