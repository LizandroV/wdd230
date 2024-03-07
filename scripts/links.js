const baseURL = "https://lizandrov.github.io/wdd230/";
const linksURL = "https://lizandrov.github.io/wdd230/data/links.json";

const activities = document.querySelector("#learning");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        // Create elements to add to the div.cards element
        let list = document.createElement('li');

        // Build the h2 content out to show the prophet's full name
        list.textContent = `${week.lesson}`;

        // Append the section(card) with the created elements
        activities.appendChild(list);
    });
}

getLinks();