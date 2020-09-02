fetch("http://localhost:3000/heroines")
    .then(response => response.json())
    .then(showHeroinesIndex)

function showHeroinesIndex(heroines) {
    const main = document.querySelector('main')
    heroines.map(heroine => {
        const nameSection = document.createElement('section')
        main.appendChild(nameSection)
        getHeroineName(heroine, nameSection)
        getHeroinePower(heroine, nameSection)
    })
}

function getHeroineName(heroine, section) {
    const name = document.createElement('h4')
    name.innerHTML = `<a href="./heroine/heroine.html?heroine_id=${heroine.id}">${heroine.name}</a>`
    section.appendChild(name)
}

function getHeroinePower(heroine, section) {
    const power = document.createElement('p')
    power.innerHTML = `Power: <a href="./power/power.html?power_id=${heroine.power.id}">${heroine.power.name}</a>`
    section.appendChild(power)
}

fetch("http://localhost:3000/powers")
    .then(response => response.json())
    .then(addSelectPowers)

function addSelectPowers(powers) {
    const select = document.querySelector('select')
    powers.map(power => {
        const powerOption = document.createElement('option')
        powerOption.value = power.id
        powerOption.textContent = power.name
        select.appendChild(powerOption)
    })
}

