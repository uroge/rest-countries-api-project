const country = document.querySelector('.country');
const themeBtn = document.querySelector('.theme-btn');
const darkElements = document.querySelectorAll('.dark-element');
let myStorage = window.localStorage;


function sendHttpRequest(method, url, data) {
    return fetch(url).then(response => {
      return response.json();
    });
}
  
async function fetchPosts(link) {
    const url = new URL(link);
  
    const responseData = await sendHttpRequest(
      'POST',
      url
    );
    console.log(responseData);
    return responseData;
}

const renderCountries = (data) => {
    const newCountry = document.createElement('div');
    newCountry.classList.add('card');
    newCountry.classList.add('single-country');
    
    newCountry.innerHTML = `
        <a href="#" id="singleCountryInfo"><img class="card-img-top" src=${data.flag} alt="${data.name} img"></a>
        <div class="card-body single-counry-info dark-element">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text mb-0">Population: <span class="card-paragraph">${data.population}</span></p>
            <p class="card-text mb-0">Region: <span class="card-paragraph">${data.region}</span></p>
            <p class="card-text mb-0">Capital: <span class="card-paragraph">${data.capital}</span></p>
        </div>
    `;

    const name = data.name;
    const img = data.flag;
    const nativeName = data.nativeName;
    const population = data.population;
    const region = data.region;
    const subRegion = data.subregion;
    const capital = data.capital
    const topLevelDomain = data.topLevelDomain;
    const currencies = [];
    data.currencies.forEach(c => {
        currencies.push(c.name);
    });
    const languages = [];
    data.languages.forEach(l => {
        languages.push(l.name);
    });
    const borderCountries = [...data.borders];

    newCountry.querySelector('#singleCountryInfo').addEventListener('click', () => {
        localStorage.setItem('name', name)
        localStorage.setItem('capital', capital);
        localStorage.setItem('img', img);
        localStorage.setItem('nativeName', nativeName);
        localStorage.setItem('population', population);
        localStorage.setItem('region', region);
        localStorage.setItem('subRegion', subRegion);
        localStorage.setItem('topLevelDomain', topLevelDomain);
        localStorage.setItem('currencies', currencies);
        localStorage.setItem('languages', languages);
        localStorage.setItem('borders', borderCountries);
        window.location.href = './country.html';
    });

    return newCountry;
}

// SEARCH

const removeCountries = () => {
    country.innerHTML = '';
}

async function getCountry(inputValue) {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
    const data = await fetchPosts(url);
    createCountryList(data);
}

const searchCountry = () => {
    document.querySelector('.js-search').addEventListener('keyup', function(e) {
      var input = document.querySelector('.js-search').value;
        removeCountries();
        if(input === '') {
            fetchCountries();
        }else {
            getCountry(input);
        }
    });
}

searchCountry();
// SEARCH

const createCountryList = (countries) => {
    country.innerHTML = '';
    countries.forEach(c => {
        country.appendChild(renderCountries(c));
    });
}
 
async function fetchCountries() {
    // const link = userInput.value;
    // loader.style.display = 'block';
    const url = `https://restcountries.eu/rest/v2/all`;
    const data = await fetchPosts(url);
    // loader.style.display = 'none';

    createCountryList(data);
}

fetchCountries();