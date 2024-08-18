
1. Start MongoDB

Ensure MongoDB is running locally on your machine.

2. Run the Seed Script

Seed the database with initial data:

node seed.js

3. Start the Node.js server:

node app

 # Assignment Description

* This project is a RESTful API for managing "Help Center" cards, representing different sections of a help center. The API allows users to create and retrieve these cards.

 * Features

Create a Card: Add a new help center card with a title and description.
Get All Cards: Retrieve a list of all available help center cards.
Get Card by Title: Retrieve a specific card's details using its title.


*  Technology Stack
As mentioned in Assigment :

Backend: Node.js, Express.js
Database: MongoDB with Mongoose ORM

* API Endpoints
POST /cards: Create a new card
GET /cards: Retrieve all cards
GET /cards/:title: Retrieve a card by title