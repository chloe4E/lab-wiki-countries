import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import countriesJson from '../countries.json';
import { useLocation } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState(countriesJson);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <h3>
              <Link
                to={`/countries/${country.alpha3Code}`}
                state={{ countryObj: country }}
              >
                {country.name.common}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
