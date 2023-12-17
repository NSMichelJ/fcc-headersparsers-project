const express = require('express');
const cors = require('cors')

const app = express();

// CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Static content
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/whoami', (req, res) => {

  const ipaddress = req.ip
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']

  res.status(200).json({
    ipaddress,
    language,
    software,
  })
})

// listen for requests
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});