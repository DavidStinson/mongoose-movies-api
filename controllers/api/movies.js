const Movie = require('../../models/movie');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function index(req, res) {
  Movie.find({}).then(function(movies) {
    res.status(200).json(movies);
  });
}

function show(req, res) {
  Movie.findById(req.params.id).then(function(movie) {
    res.status(200).json(movie);
  });
}

function create(req, res) {
  Movie.create(req.body).then(function(movie) {
    res.status(201).json(movie);
  });
}

function deleteOne(req, res) {
  Movie.findByIdAndRemove(req.params.id).then(function(movie) {
    res.status(200).json(movie);
  });
}

function update(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(movie) {
    res.status(200).json(movie);
  });
}