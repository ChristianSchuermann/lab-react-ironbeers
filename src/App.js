import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Beers from './pages/Beers.jsx';
import BeerDetails from './pages/BeerDetails.jsx';
import NewBeer from './pages/NewBeer.jsx';
import RandomBeer from './pages/RandomBeer.jsx';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:beerId" element={<BeerDetails />}/>
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />

    </Routes>


    </div>
  );
}

export default App;