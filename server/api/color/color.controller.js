'use strict';

var _ = require('lodash');
var Color = require('./color.model');

// Get list of colors
exports.index = function(req, res) {
  Color.find(function (err, colors) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(colors);
  });
};

// Get a single color
exports.show = function(req, res) {
  Color.findById(req.params.id, function (err, color) {
    if(err) { return handleError(res, err); }
    if(!color) { return res.status(404).send('Not Found'); }
    return res.json(color);
  });
};

// Creates a new color in the DB.
exports.create = function(req, res) {
  Color.create(req.body, function(err, color) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(color);
  });
};

// Updates an existing color in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Color.findById(req.params.id, function (err, color) {
    if (err) { return handleError(res, err); }
    if(!color) { return res.status(404).send('Not Found'); }
    var updated = _.merge(color, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(color);
    });
  });
};

// Deletes a color from the DB.
exports.destroy = function(req, res) {
  Color.findById(req.params.id, function (err, color) {
    if(err) { return handleError(res, err); }
    if(!color) { return res.status(404).send('Not Found'); }
    color.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}