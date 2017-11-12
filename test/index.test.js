import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import mongoose from 'mongoose';

const should = chai.should();
chai.use(chaiHttp);

describe('Blobs', () => {

  before(() => {
    mongoose.createConnection('mongodb://localhost:27017/planatrip-database');
  });

  it('/ should have status 200 (Success)', (done) => {
    chai.request(server).
      get('/').
      end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('/leaderBoard should have status 200 (Success)', (done) => {
    chai.request(server).
      get('/leaderBoard').
      end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
