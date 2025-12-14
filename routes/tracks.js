const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// Get all tracks
router.get('/', async (req, res) => {
  const tracks = await Track.findAll();
  res.json(tracks);
});

// Create a track
router.post('/', async (req, res) => {
  try {
    const { title, artist } = req.body;
    const track = await Track.create({ title, artist });
    res.status(201).json(track);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
