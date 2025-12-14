const { sequelize } = require('./models/User'); // import sequelize instance
const User = require('./models/User');
const Track = require('./models/Track');
const Collaboration = require('./models/Collaboration');

const setupDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // recreate tables
    console.log('Database setup complete');
    process.exit();
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};

setupDatabase();
