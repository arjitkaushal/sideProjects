console.log('connected');
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const prom = fetch(endpoint);
prom.then(blob => blob.json())
    .then(data => {
        //console.log(data);
        cities.push(...data);
    });

function findMatches(wordMatch, cities) {
    return cities.filter(place => {
        //here we need to figure out if the city or state searched matches or not
        const regex = new RegExp(wordMatch, 'gi');
        return place.city.match((regex) || place.this.state.match(regex));

    });

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    //console.log(this.value);

    const matchArray = findMatches(this.value, cities);
    const htmlContent = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName} ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
            
        </li>
        `;
    }).join('');
    suggestions.innerHTML = htmlContent;

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);