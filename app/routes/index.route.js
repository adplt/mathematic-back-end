import express from 'express';
import index from './app.route';
import leaderBoard from './LeaderBoard/LeaderBoard.route';

const app = express.Router();

app.use('/', index);
app.use('/leaderBoard', leaderBoard);

export default app;
