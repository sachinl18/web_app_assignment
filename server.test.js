const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return a 200 OK status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('POST /submit', () => {
  it('should return a 200 OK status and render the index view with the submitted name', async () => {
    const res = await request(app)
      .post('/submit')
      .send({ name: 'DevOps' });

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello DevOps');
  });
});

