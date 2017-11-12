import express from 'express';
import {getLeaderBoard} from '../../controllers/LeaderBoard/LeaderBoard.controller';

const app = express.Router();

app.get('/', getLeaderBoard);

export default app;
