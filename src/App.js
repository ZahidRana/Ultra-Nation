import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryCount, setCountryCount] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (countryDetails) => {
    console.log(countryDetails);
    const newCountryCount = [...countryCount, countryCount];
    setCountryCount(newCountryCount);
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Number of Countries : {countries.length}</h1>
      <h2 style={{textAlign:"center"}}>Added Countries : {countryCount.length}</h2>
        {
          countries.map(country => <Country countryDetails={country} handleAddCountryBtn={handleAddCountry} key={country.alpha3Code}></Country>)
        }
    </div>
  );
}

export default App;
