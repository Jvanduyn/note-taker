//holding any front end routes
const router = require('express').Router();
const path = require('path');
const api = require('./api')

router.use('/api', api)

// GET /notes should return the notes.html file.
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
)

// GET * should return the index.html file.
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

module.exports = router

