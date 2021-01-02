const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 1337;

app.use(cors());
// Serve any static files
app.use(express.static(path.join(__dirname, 'build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));