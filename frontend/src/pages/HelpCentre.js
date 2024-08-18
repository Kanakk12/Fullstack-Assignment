import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function HelpCenter() {

  // State to store the list of cards fetched from the server
  const [cards, setCards] = useState([]);

  // State to manage the current search term for filtering cards
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Fetch the list of cards from the server
    fetch("http://localhost:5000/cards")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debug line to log fetched data
        setCards(data); // Update state with the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
  // Filter cards based on the search term
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-center">
      <div className="search_div">
        <h1>How can we help?</h1>
        {/* SearchBar component for inputting the search term */}
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <div className="card-grid">
        {/* Map through the filtered cards and render a Card component for each */}
        {filteredCards.map((card) => (
          <Card
            key={card.id} // Unique key for each card to help React identify which items have changed
            title={card.title} // Pass the card's title as a prop
            description={card.description} // Pass the card's description as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default HelpCenter;
