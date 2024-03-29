const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=> displayCountries(data))
}
const displayCountries = countries => {

    const countriesContainer = document.getElementById('all-countries');
    // for(const country of countries){
    //     console.log(country);   
    // }
    countries.forEach(country =>{
        console.log(country.capital);
        const countryDiv=document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0]: 'No Capital'}</p>
        <button>Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
    
}
loadCountries();


 