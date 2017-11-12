import express from 'express';

const app = express.Router();

/* GET home page. */
app.get('/', (req, res) => res.render('index', {title: 'Mathematic Back End', subtitle: 'Mathematic Back End API. This is for get the Leader board and save your high score to database.'}));

export default app;
