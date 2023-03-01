const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const containerCountries = document.getElementById('all-countries');

    // console.log(countris);
    // for (const country of countries) {
    //     console.log(country)
    // }
    countries.forEach(country => {
        console.log(country)
        const countyDiv = document.createElement('div');
        countyDiv.classList.add('country');
        countyDiv.innerHTML = `
        <h3>Name:</h3>

      
        `;
        containerCountries.appendChild(countyDiv);
    })
}

loadCountry();