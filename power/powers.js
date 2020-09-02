fetch("http://localhost:3000/powers")
    .then(response => response.json())
    .then(showPowerInfo)

function showPowerInfo(powers) {
    const main = document.querySelector('main')
    powers.map(power => {
        const powerSection = document.createElement('section')
        main.appendChild(powerSection)
        showPowerName(power, powerSection)
        showPowerDesc(power, powerSection)
    })
}

function showPowerName(power, powerSection) {
    const name = document.createElement('p')
    name.innerHTML = `<a href="power.html">${power.name}</a>`
    powerSection.appendChild(name)
}

function showPowerDesc(power, powerSection) {
    const desc = document.createElement('p')
    desc.textContent = power.description
    powerSection.appendChild(desc)
}


