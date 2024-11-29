//Array of projects
const projects = [
    {
        title: 'shoptacle',
        description:"A dev project of shopping.",
      
    },

{
    title: 'bootstrap',
    description:"A dev project of workspace.",
  
},
{
    title: 'food source website',
    description:"A design project of food app.",
  
},
{
    title: 'real estate landing page',
    description:"A design project of houses.",
  
},
{
    title: 'jameson landing page',
    description:"A design project of alcohol.",
  
},
{
    title: 'luxury watch website landing page',
    description:"A design project of watches.",
  
},
{
    title: 'waste management application',
    description:"A design project of waste.",
  
}
];
//function to load projects
function loadprojects() {
    const projectslist = document.getElementById('project-list');

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        })
        <iframe src ="${project.url}" title="${project.title}" class="project-iframe"></iframe>
        `;
        projectslist.appendChild(projectCard);
    });
}

//load the project when the dom is loaded

document.addEventListener('DOMContentLoaded', loadprojects);