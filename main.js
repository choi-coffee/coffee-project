"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee-card row">';
    html += `<div class="card">`
    html += `<div class="card-body">`
    html += `<h3>${coffee.name}</h3>`;
    html += `<p>${coffee.roast}</p>`;
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees, filter) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        const coffeeNameLower = coffees[i].name.toLowerCase();
        if (coffeeNameLower.includes(filter.toLowerCase()) || filter === '' || filter === undefined) {
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    const searchTerm = document.getElementById('search-form').value;
    const filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast.toLowerCase());
    coffeeBody.innerHTML = renderCoffees(filteredCoffees, searchTerm);
}

function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const coffeeName = document.getElementById('new-coffee').value;
    coffees.push({
        id: coffees.length+1,
        name: coffeeName,
        roast: addRoastType.value
    })

    coffeeBody.innerHTML = renderCoffees(coffees,'');
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const coffeeBody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const addButton = document.querySelector('#add-roast');
const addRoastType = document.querySelector('#roast-add');
document.getElementById('search-form').addEventListener('input', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
addButton.addEventListener('click', addCoffee);

coffeeBody.innerHTML = renderCoffees(coffees, '');
