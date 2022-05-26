import './App.css';
import countriesJson from '../src/countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the countries App</h1>
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route
              path="/countries/:alpha3code"
              element={<CountryDetails countries={countries} />}
            />
            <Route path="/" element={<CountriesList countries={countries} />} />

            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
