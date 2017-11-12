import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('index', {title: 'Mathematic Back End', subtitle: 'Mathematic Back End API. This is for get the Leader board and save your high score to database.'}));

module.exports = router;
