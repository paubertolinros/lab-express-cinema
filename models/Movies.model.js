const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: {
    type: String,
    default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
  },
  description: String,
  showtimes: [String]
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;