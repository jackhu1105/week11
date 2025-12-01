const express = require('express');
const router = express.Router();
const repo = require('../repositories/participants');

router.post('/', async (req, res) => {
  try {
    const doc = await repo.create(req.body);
    res.json({ _id: doc._id });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({ message: 'Duplicate email' });
    }
    res.status(500).end();
  }
});

router.get('/', async (req, res) => {
  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 10);
  const data = await repo.list(page, limit);
  res.json(data);
});

router.patch('/:id', async (req, res) => {
  const doc = await repo.update(req.params.id, req.body);
  res.json(doc);
});

router.delete('/:id', async (req, res) => {
  await repo.remove(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
