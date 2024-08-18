import React from 'react';
import HelpCenter from './pages/HelpCentre';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <HelpCenter />
      <Footer />
    </div>
  );
}

export default App;

