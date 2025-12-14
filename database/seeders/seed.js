const User = require('../models/User');
const Track = require('../models/Track');
const Collaboration = require('../models/Collaboration');

const seedDatabase = async () => {
  try {
    const users = await User.bulkCreate([
      { username: 'Alice', email: 'alice@example.com' },
      { username: 'Bob', email: 'bob@example.com' },
      { username: 'Charlie', email: 'charlie@example.com' }
    ]);

    const tracks = await Track.bulkCreate([
      { title: 'Beat One', artist: 'Alice', audioUrl: 'http://example.com/beat1.mp3' },
      { title: 'Melody Two', artist: 'Bob', audioUrl: 'http://example.com/melody2.mp3' }
    ]);

    await Collaboration.bulkCreate([
      { role: 'Vocalist', UserId: users[0].id, TrackId: tracks[0].id },
      { role: 'Producer', UserId: users[1].id, TrackId: tracks[1].id }
    ]);

    console.log('Database seeding complete');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
  }
};

seedDatabase();
