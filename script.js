const infoJustFood = (peopleNr) => {
    peopleNr = Number(peopleNr)
    const foodPrice = 150
return `catering od Just Food pro ${peopleNr} lidí za ${peopleNr * foodPrice} Kč`
}

const infoYourMama = (peopleNr) => {
    peopleNr = Number(peopleNr)
    const foodPrice = 200
return `catering od Your Mama pro ${peopleNr} lidí za ${peopleNr * foodPrice} Kč`
}

const infoFlavourHaven = (peopleNr) => {
    peopleNr = Number(peopleNr)
    const foodPrice = 300
return `catering od Flavour Haven pro ${peopleNr} lidí za ${peopleNr * foodPrice} Kč`
}

/*
document.body.innerHTML += `<p>${infoJustFood(50,150)}</p>`
document.body.innerHTML += `<p>${infoYourMama(120,200)}</p>`
document.body.innerHTML += `<p>${infoFlavourHaven(300,300)}</p>`
*/

const createEvent = (eventName, peopleNr, cateringCompany) => {
return `${eventName} s ${cateringCompany(peopleNr)}`
}

document.body.innerHTML += `<p>${createEvent('Událost Vánoční večírek', 50, infoJustFood)}.</p>`
document.body.innerHTML += `<p>${createEvent('Událost Vánoční večírek', 50, infoYourMama)}.</p>`
document.body.innerHTML += `<p>${createEvent('Událost Vánoční večírek', 50, infoFlavourHaven)}.</p>`
