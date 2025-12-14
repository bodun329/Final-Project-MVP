const request = require('supertest');
const app = require('../index'); // your Express app
const sequelize = require('../database/connection');
const User = require('../models/User');

beforeAll(async () => {
  // Reset DB before tests
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  // Close DB connection after tests
  await sequelize.close();
});

describe('User Authentication', () => {
  test('POST /users/register should create a new user', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.username).toBe('testuser');
  });

  test('POST /users/register should fail with existing username', async () => {
    // Try creating the same user again
    const res = await request(app)
      .post('/users/register')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Username already exists');
  });
});
