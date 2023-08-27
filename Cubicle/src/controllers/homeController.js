const { getAll } = require('../services/cubeService');

const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    let cubes = getAll();
    res.render('index', { cubes });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

module.exports = homeController;
