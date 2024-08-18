// HEADER

import React from 'react';
import { SiAbstract } from "react-icons/si"; //Importing React icons here

function Header() {
  return (
    <header className="header">
      <div className="header-left">
      <SiAbstract className='icon'/>
      <h4 className='abstract'>Abstract  |</h4>
        <h4 className='hc'> Help Center</h4>
      </div>
      <div className="header-right">
        <button className="submit-request">Submit a request</button>
      </div>
    </header>
  );
}

export default Header;
