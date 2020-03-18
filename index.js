const STORE = [
    {
        thumbnail: 'images/edreedquiz.png',
        alt: 'A screengrab of Ed Reed Quiz',
        description: 'A Quiz app to test the user’s knowledge of the greatest free-safety of all time, Ed Reed. \
        App provides visual feedback for user score and end results.',
        details: ['Technologies Used: HTML, CSS, Javascript (Library: JQuery)', 
        '<a href="https://steviereyjuan.github.io/EdReedQuiz/">Live</a>', 
        '<a href="https://github.com/StevieReyJuan/EdReedQuiz">Github Repo</a>']
    },
    // {
    //     thumbnail: 'test',
    //     alt: 'test',
    //     description: 'test',
    //     details: ['test', 'test', 'test']
    // }
]

function renderProjectSection(projectIndex) {
    let projectHTML = 
    $(`<div class="container">
        <div>
            <img class="project-thumbnail" src="${STORE[projectIndex].thumbnail}" alt="${STORE[projectIndex].alt}">
        </div>
    </div>
    <h3 class="project-description">${STORE[projectIndex].description}</h3>
    <div class="project-description-sub">
        <ul>
        </ul>
    </div>`)
    
    let findUl = $(projectHTML).find('ul')

    STORE[projectIndex].details.forEach(function(liValue) {
        $(`<li>${liValue}</li>`).appendTo(findUl);
    });

    return projectHTML;
}

function populateProjects() {

    for (let index = 0; index <= STORE.length; index++) {
        $('.projects').append(renderProjectSection(index));
    }

    return $('.projects');
}

// function autoScroll() {
//     $('.top-links').on('click', 'li', function (event) {
//         event.preventDefault();
//         const jumpTo = $(this).find('a').attr('href');
//     });
// }

function expandMenu() {
    $('nav').on('click', 'i', function(event) {
        $(this).addClass('.hideMe');
        console.log(event);
    });
}

function runIt() {
    populateProjects();
    autoScroll();
    expandMenu();
}

$(runIt);
