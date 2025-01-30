const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.url);
    res.send('Welcome!');
});

module.exports = router;