const Products = require('../models').products;

module.exports = {
    list(req, res) {
        return Products
            .findAll()
            .then(todos => res.status(200).send(todos))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return Products
            .create({
                name: req.body.name,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
};
