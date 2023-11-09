const path = require('path');
const router = require('express').Router();

// Route to serve the `notes.html` page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// All other routes should redirect to the `index.html` page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
