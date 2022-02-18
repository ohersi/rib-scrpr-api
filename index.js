PORT = process.env.PORT || 8000;
const express = require('express');
const getMatchData = require('./getMatchData');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit')
const res = require('express/lib/response');
app.use(cors());


// Rate Limiting
const limit = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 mins
    max: 100
})

app.use(limit)
app.set('trust proxy', 1)

try {
    app.get('/matches', async (req, res) => {
        const matches = await getMatchData();
        res.json(matches);
    });
}
catch (error) {
    res.status(500).json({ error })
}


app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))