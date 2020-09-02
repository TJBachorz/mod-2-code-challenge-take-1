const queryParams = new URLSearchParams(window.location.search);
const powerId = queryParams.get('power_id');

fetch(`http://localhost:3000/powers/${powerId}`)
    .then(response => response.json())
    .then(showHolders)

function showHolders(power) {
    const body = document.querySelector('body')
    makeHead(power, body)
    makeDesc(power, body)
    getHeroineNames(power, body)
}


function makeHead(power, body) {
    const head = document.createElement('h2')
    head.textContent = power.name
    body.appendChild(head)
}

function makeDesc(power, body) {
    const desc = document.createElement('p')
    desc.textContent = power.description
    body.appendChild(desc)
}

function getHeroineNames(power, body) {
    const namesHeader = document.createElement('h3')
    namesHeader.textContent = "Holders of this power:"
    body.appendChild(namesHeader)
    const heroines = power.heroines
    console.log(heroines)
    heroines.map(heroine => {
        const name = document.createElement('p')
        name.innerHTML = `<a href="http://localhost:3001/heroine/heroine.html?heroine_id=${heroine.id}">${heroine.name}</a>`
        body.appendChild(name)
    })
}
