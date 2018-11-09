const db = require('../config/dbConfig');

module.exports = {
  getReviewByID,
  editReview,
  removeReview
};

function getReviewByID(id) {
  return db('reviews')
    .where({ review_id: id })
    .first();
}

function editReview(id, changes) {
  return db('reviews')
    .where({ review_id: id })
    .update(changes);
}

function removeReview(id) {
  return db('reviews')
    .where({ review_id: id })
    .del();
}