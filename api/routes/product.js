const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: `GET - (read) showing products`
    })
});

module.exports = router;