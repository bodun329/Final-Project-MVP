const express = require('express');
const app = express();
const sequelize = require('./database/connection');

const userRoutes = require('./routes/users');
const trackRoutes = require('./routes/tracks');
const User = require('./models/User');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);

const PORT = 3000;

sequelize.sync({ alter: true }).then(async () => {
  console.log('Database connected successfully.');

  // Create a test user automatically
  const testUser = await User.findOne({ where: { username: 'testuser' } });
  if (!testUser) {
    const hashedPassword = await bcrypt.hash('1234', 10);
    await User.create({ username: 'testuser', password: hashedPassword });
    console.log('Test user created: testuser / 1234');
  } else {
    console.log('Test user already exists');
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('DB connection failed:', err));
