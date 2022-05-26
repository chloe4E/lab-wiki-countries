import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  console.log(props);
  const { countries } = props;
  console.log(countries);
  console.log(countries[0]);
  return (
    <div>
      <h2>Projects</h2>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <h3>
              <Link to={`/countries/${country.alpha3Code}`}>
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
