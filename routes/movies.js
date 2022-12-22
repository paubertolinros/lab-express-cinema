const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies.model.js')

/* GET Movies page */
/* ROUTE /movies page */
router.get('/', async function (req, res, next) {
  try {
    const movies = await Movie.find({});
    //console.log(`hola ${ movies } `)
    res.render('movies', { movies });
    
  } catch (error) {
    next(error)
  }
});
module.exports = router;


/* GET one movie */
/* ROUTE /movies page */
//Está bien crear la ruta en este file o mejor crearla 
//en un file aparte ?
router.get('/:movieId', async (req, res, next) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId);
    res.render('movies-details', movie);
  } catch (error) {
    next(error)
  }
});