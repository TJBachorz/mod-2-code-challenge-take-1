const queryParams = new URLSearchParams(window.location.search);
const heroineId = queryParams.get('heroine_id');

fetch(`http://localhost:3000/heroines/${heroineId}`)
    .then(response => response.json())
    .then(showHeroineInfo)


function showHeroineInfo(heroine) {
    const body = document.querySelector('body')
    const heroineSection = document.createElement('section')
    body.appendChild(heroineSection)
    getHeroineName(heroine, heroineSection)
    getHeroineSupername(heroine, heroineSection)
    getHeroinePower(heroine, heroineSection)    
}


function getHeroineName(heroine, section) {
    const name = document.createElement('h3')
    name.innerText = heroine.name
    section.appendChild(name)
}

function getHeroineSupername(heroine, section) {
    const supername = document.createElement('p')
    supername.innerHTML = `Otherwise known as...<h3><em>${heroine.supername}</em></h3>`
    section.appendChild(supername)
}

function getHeroinePower(heroine, section) {
    const power = document.createElement('p')
    power.innerHTML = `Power: <a href="http://localhost:3001/power/power.html?power_id=${heroine.power.id}"">${heroine.power.name}</a>`
    section.appendChild(power)
}