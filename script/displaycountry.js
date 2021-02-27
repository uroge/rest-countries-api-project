const countryInfo = document.querySelector('.country-info');
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = './index.html';
})

const showCountryInfo = () => {
    countryInfo.innerHTML = `
    <div class="col-10 col-md-6">
            <img src=${localStorage.getItem('img')} alt="" class="img-fluid">
            </div>
            <div class="col-10 col-md-6 align-self-center">
                <div class="col mb-3"><h4>${localStorage.getItem('name')}</h4></div>
                <div class="d-flex">
                    <div class="col-6">
                        <p class="mb-1">Native Name: ${localStorage.getItem('nativeName')}</p>
                        <p class="mb-1">Population: ${localStorage.getItem('population')}</p>
                        <p class="mb-1">Region: ${localStorage.getItem('region')}</p>
                        <p class="mb-1">Sub Region: ${localStorage.getItem('subRegion')}</p>
                        <p class="mb-1">Capital: ${localStorage.getItem('capital')}</p>
                    </div>
                    <div class="col-6 align-self-center">
                        <p class="mb-1">Top Level Domain: ${localStorage.getItem('topLevelDomain')}</p>
                        <p class="mb-1">Currencies: ${localStorage.getItem('currencies')}</p>
                        <p class="mb-1">Languages: ${localStorage.getItem('languages')}</p>
                    </div>
                </div>
                <div class="col mt-3">
                    <p>Border Countries: ${localStorage.getItem('borders')}</p>
                </div>
            </div>
    `;
}

showCountryInfo();