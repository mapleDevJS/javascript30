const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

fetch(endpoint)
    .then(data => data.json())
    .then(data => cities.push(...data))

const findMatches = (wordToMatch, cities) => {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const displayMatches = () => {
    const matchArray = findMatches(searchInput.value, cities);
    
    const html = matchArray.map((place) => {
        const regex = new RegExp(searchInput.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${searchInput.value}</span>`);

        return `<li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="popultaion">${numberWithCommas(place.population)}</span>
        </li>`;
    }).join('');
    suggestions.innerHTML = html;
}

searchInput.addEventListener('input', displayMatches);