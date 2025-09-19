 import React from 'react';

const Country = ({country}) => {
    console.log(country);
    
    return (
        <div>
             <img src={country.flags.flags.png} alt="" />
            <h1>Name: {country.name.common} </h1>
        </div>
    );
};

export default Country;