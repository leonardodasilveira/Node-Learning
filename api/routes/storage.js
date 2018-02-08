const express = require('express');
const router = express();

router.get('/:id', (req, res, next) => {

    const id = req.params.id;
    res.status(200).json({
        message: `GET - (read) Reading the item ${id} from the storage`,
        id: id,
    })
});
//
// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: `GET - (read) Reading all the itens from the storage`,
//         id: id
//     })
// });

router.post('/', (req, res, next) => {
    const storage = {
        name: req.body.name //This becomes available because of the body-parser
    };
    res.status(200).json({
        message: 'POST - (create) Storage is running!',
        storageCheck: storage
    })
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `PATCH - (update) Item ${id} in storage was updated!`
    })
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `DELETE - (delete) Item ${id} in storage was deleted!`
    })
});

module.exports = router;