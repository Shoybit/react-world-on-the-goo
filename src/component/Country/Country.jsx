import React from 'react';
import './Country.css'
const Country = ({ country }) => {
    console.log(country);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Short Name : {country.cca3.cca3}</h4>
            <h4>Languages: {Object.values(country.languages.languages).join(", ")}</h4>
            <p>population: {country.population.population}</p>
        </div>
    );
};

export default Country;