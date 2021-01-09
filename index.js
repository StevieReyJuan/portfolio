const STORE = [
    {
        thumbnail: 'images/shop.drinkwaterscambridge.com.png',
        alt: 'A screenshot of Drinkwater\'s e-commerce website',
        description: '"Necessity is the mother of invention", and though an eCommerce site is by no means innovative in and of itself, the COVID-19 pandemic forced our small team at Drinkwater\'s to adapt in the 11th hour to the challenge of shuttering our doors for an extended shelter-in-place order. A (reluctant) first in the archetypal brick and mortar\'s 16 year history, I led the project on all technical and integrative fronts, with the added bonus of getting to practice some product photography and editing in Adobe Creative Suite. I continue to manage <span>Shop.DrinkwatersCambridge.com</span>, still in its earliest iteration due to its unexpected execution and <em>substantial</em> workload.',
        details: ['Technologies Used: HTML, CSS, Javascript, Lightspeed API, Adobe Creative Suite, PHP (Twig)', 
        '<a href="https://shop.drinkwaterscambridge.com/" target="_blank">Shop</a>',]
    },
    {
        thumbnail: 'images/tasktriagescreen.png',
        alt: 'A screenshot of Task Triage\'s tasks page',
        description: '<span>Task Triage</span> is a task management/organization app with an emphasis on prioritizing tasks by their "status"/level of urgency. Task Triage\'s general theme and color-story draws inspiration from a medical triage and its tagging system. Task Triage allows users to share tasks with "teams" for collaboration, with access to any tasks that a user is a teammate of. Use Task Triage for personal or shared accountability and get things done!',
        details: ['Technologies Used: Javascript, HTML, CSS, React (Hooks, Router), Node, Express, JWT, UUID, Jest, Supertest, Mocha, Chai, PostgreSQL, Knex', 
        '<a href="https://task-triage-client.vercel.app/" target="_blank">Live</a>', 
        '<a href="https://github.com/StevieReyJuan/Task-Triage-Client" target="_blank">Client Repo</a>',
        '<a href="https://github.com/StevieReyJuan/Task-Triage-Server" target="_blank">API Repo</a>']
    },
    {
        thumbnail: 'images/shirtspecscreen.png',
        alt: 'A screenshot of ShirtSpec\'s measurement page',
        description: '<span>ShirtSpec</span> is a measurement companion app for Individualized Shirts retail partners. Designed specifically with new trainees in mind, ShirtSpec guides fitters through the custom shirt fitting process ensuring that they accurately record key values within the scope of the nation\'s most comprehensive custom shirt program.',
        details: ['Technologies Used: Javascript, HTML, CSS, React (Hooks, Router), Node, Express, JWT, Jest, Supertest, Mocha, Chai, PostgreSQL, Knex', 
        '<a href="https://shirtspec-app.vercel.app/" target="_blank">Live</a>', 
        '<a href="https://github.com/StevieReyJuan/ShirtSpec" target="_blank">Client Repo</a>',
        '<a href="https://github.com/StevieReyJuan/shirtspec-api" target="_blank">API Repo</a>']
    },
    {
        thumbnail: 'images/brewhopscreen.png',
        alt: 'A screenshot of BrewHop\'s results page',
        description: 'My first project for Thinkful\'s Software Engineering program: <span>BrewHop</span> is a tool to find breweries within walking distance of a user for a fun, safe afternoon of brewery hopping.',
        details: ['Technologies Used: Javascript (JQuery), HTML, CSS, Google Maps Geocode API, Google Maps Javascript API, Google Maps JS API Places & Distance Matrix libraries ', 
        '<a href="https://steviereyjuan.github.io/BrewHop/" target="_blank">Live</a>', 
        '<a href="https://github.com/StevieReyJuan/BrewHop" target="_blank">Client Repo</a>']
    }
]

function renderProjectSection(projectIndex) {
    const projectHTML = 
        $(`<div class="project-container">
                <img class="project-thumbnail" src="${STORE[projectIndex].thumbnail}" alt="${STORE[projectIndex].alt}">
                <h3 class="project-description">${STORE[projectIndex].description}</h3>
                <div class="project-description-sub">
                    <ul>
                    </ul>
                </div>
            </div>`);
    
    const findUl = $(projectHTML).find('ul')

    STORE[projectIndex].details.forEach(function(liValue) {
        $(`<li>${liValue}</li>`).appendTo(findUl);
    });

    return projectHTML;
}

function populateProjects() {

    for (let i = 0; i < STORE.length; i++) {
        $('.projects').append(renderProjectSection(i));
    }

    return $('.projects');
}

function emailMe() {
    $('.contact-button').on('click', function(event) {
        const email = 's.steven.reyes+portfolio@gmail.com';
        const subject = 'I\'ve Got An Idea!';
        const emailBody = 'Hey Sergio,';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    });
}

function runIt() {
    populateProjects();
    emailMe();
}

$(runIt);
