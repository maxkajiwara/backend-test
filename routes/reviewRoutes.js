const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

const db = require('../models/reviewModel');

router.get('/api/review/:id', (req, res, next) => {

  const { id } = req.params;

  db
    .getReviewsByReviewID(id)
    .then(review => {
      if (!review) {
        res.status(404).json({ error: 'Review does not exist.' });
      }
      res.status(200).json(review);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/api/review/:id', ensureLoggedIn, function (req, res, next) {

  const { id } = req.params;
  const changes = req.body;

  db
    .editReview(id, changes)
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/api/review/:id', ensureLoggedIn, function (req, res, next) {

  const { id } = req.params;

  db
    .removeReview(id)
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;