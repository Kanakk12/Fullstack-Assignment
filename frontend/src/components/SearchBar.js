// SEARCH BAR

import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <input className='srch'
      type="text"
      placeholder="Search"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
