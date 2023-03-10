const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
//found the short id npm module on https://www.geeksforgeeks.org/node-js-npm-uuid/
const { v4: uuidv4 } = require('uuid')
const { notes } = require('../../db/db.json');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

router.post('/', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding Note');
    }
});

module.exports = router;
