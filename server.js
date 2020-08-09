const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

const { notes } = require('./db/db');

app.get('/api/notes', (req, res) => {
    res.send('Hey');
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`On Port ${PORT}!`);
});