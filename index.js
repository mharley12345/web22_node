const express = require('express');

const server = express();

// middleware

// endpoints
server.get('/', (req, res) => {
  res.json({ api: 'running!' });
});

const port = 8888;
server.listen(port, () => console.log('server running'));
