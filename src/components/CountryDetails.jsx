import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function CountryDetails(props) {
  const [foundCountry, setFoundCountry] = useState([]);

  const { countries } = props;
  console.log(countries);
  const { alpha3code } = useParams();
  console.log(alpha3code);

  const foundCountryFunc = countries.filter((el) => {
    console.log(el.name.common);
    console.log(el.alpha3Code);
    return el.alpha3Code === alpha3code;
  });
  console.log(foundCountryFunc);
  setFoundCountry(foundCountryFunc);

  return (
    <div>
      <h1>Welcome to: {foundCountry.name.common}</h1>CountryDetails:
      {foundCountry.region}
    </div>
  );
}

export default CountryDetails;
