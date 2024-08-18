const express = require('express');
const { createCard, getAllCards, getCardByTitle } = require('../controllers/cardController');

// Create a new router instance
const router = express.Router();

// Route to handle creating a new card
// This route listens for POST requests at the root path ('/')
// and uses the createCard controller function to handle the request
router.post('/', createCard);

// Route to handle retrieving all cards
// This route listens for GET requests at the root path ('/')
// and uses the getAllCards controller function to handle the request
router.get('/', getAllCards);

// Route to handle retrieving a card by its title
// This route listens for GET requests at the path '/:title'
// and uses the getCardByTitle controller function to handle the request
// The ':title' is a route parameter, which will be passed to the controller function
router.get('/:title', getCardByTitle);

// Export the router to be used in other parts of the application
module.exports = router;

