import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the countries App</h1>
      <div className="container">
        <div className="row">
          <div class="col-3">
            <CountriesList />
          </div>

          {/* React-Router Route rendering the CountryDetails should go here */}
          <div class="col-9">
            <Routes>
              <Route
                path="/countries/:alpha3code"
                element={<CountryDetails />}
              />

              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
