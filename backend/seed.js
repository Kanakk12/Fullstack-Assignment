const mongoose = require('mongoose');
const Card = require('./models/Card');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/helpcenter', {
  useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use the new server discovery and monitoring engine
});

// Array of card objects to seed the database
const seedCards = [
  {
    id: "1", // Unique identifier for the card (not necessary if using MongoDB's ObjectId)
    title: "Branches", // Title of the card
    description: "Abstract Branches lets you manage, version, and document your designs in one place.", // Description of the card
  },
  {
    id: "2",
    title: "Manage your account",
    description: "Configure your account settings, such as your email, profile details, and password.",
  },
  {
    id: "3",
    title: "Manage organizations, teams, and projects",
    description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
  },
  {
    id: "4",
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
  },
  {
    id: "5",
    title: "Authenticate to Abstract",
    description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  },
  {
    id: "6",
    title: "Abstract support",
    description: "Get in touch with a human.",
  },
];

// Function to seed the database
const seedDB = async () => {
  // Remove all existing cards from the database
  await Card.deleteMany({});
  // Insert the new cards into the database
  await Card.insertMany(seedCards);
  console.log('Database seeded!'); // Log message indicating the database has been seeded
  // Close the database connection
  mongoose.connection.close();
};

// Run the seedDB function to perform the seeding
seedDB();

