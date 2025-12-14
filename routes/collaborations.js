const express = require('express');
const router = express.Router();
const Collaboration = require('../database/models/Collaboration');

// GET all collaborations
router.get('/', async (req, res) => {
  const collaborations = await Collaboration.findAll();
  res.json(collaborations);
});

// POST create collaboration
router.post('/', async (req, res) => {
  const { role, UserId, TrackId } = req.body;
  const collab = await Collaboration.create({ role, UserId, TrackId });
  res.status(201).json(collab);
});

module.exports = router;

