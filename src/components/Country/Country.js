import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, region, nativeName, numericCode, flag } = props.countryDetails;
    const btnStyle = {backgroundColor:"white", color:"green", padding:"8px 25px", border:"1px solid gray"}
    const handleAddCountry = props.handleAddCountryBtn;
    return (
        <div className="countryContainer">
            <h3>Country Name : {name}</h3>
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Native Name : {nativeName}</p>
            <p>Country Code : {numericCode}</p>
            <img style={{ height: "100px" }} src={flag} alt="" />
            <br/>
            <br/>
            <button className="addCountryBtn" onClick={() => handleAddCountry(props.countryDetails)}>Add Country</button>
        </div>
    );
};

export default Country;