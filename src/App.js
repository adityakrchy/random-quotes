// import logo from './logo.svg';
import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import QuotesCard from './components/QuotesCard';

function App() {


  return (
    <div>
      {/* <img src={bg} alt="bg" className="bg-img img-fluid" /> */}

      <Navbar mode="dark" title="Random Quotes" />
      <QuotesCard />
    </div>
  );
}

export default App;
