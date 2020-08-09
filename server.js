const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const path = require('path');
const fs = require('fs');
const unique_id = require('unique-id-key')

const notes = require('./db/db.json');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    return res.json(notes);
});

app.post('/api/notes', (req, res) => {
    req.body.id = unique_id.APIKEY(8, "-");
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});

app.listen(PORT, () => {
    console.log(`On Port ${PORT}!`);
});
