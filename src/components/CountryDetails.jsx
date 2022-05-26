import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CountryDetails() {
  //const [foundCountry, setFoundCountry] = useState([]);
  const location = useLocation();
  const { countryObj } = location.state;
  console.log(countryObj);

  const { alpha3code } = useParams();
  console.log(alpha3code);

  console.log('found country is: ' + countryObj.name.official);
  return (
    <div>
      <h1>Welcome to: {countryObj.name.official}</h1>CountryDetails:
      {countryObj.region}
    </div>
  );
}

export default CountryDetails;
