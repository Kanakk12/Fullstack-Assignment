const Card = require('../models/Card');

// Create a new card
exports.createCard = async (req, res) => {
  try {
    const { id, title, description } = req.body;
    const card = new Card({ id, title, description });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific card by title
exports.getCardByTitle = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
