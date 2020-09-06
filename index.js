// const githubUsersApiEndPoint = 'https://api.github.com/users'
const githubEndPoint = 'https://github.com'
const addCollaborator = (collaborator) => {

  const list = document.querySelector('.list')

  const collaboratorEl = document.createElement('div')
  collaboratorEl.className = 'collaborator'

  const photo = document.createElement('img')
  const name = document.createElement('b')
  const role = document.createElement('span')

  collaboratorEl.appendChild(photo)
  collaboratorEl.appendChild(name)
  collaboratorEl.appendChild(role)
  photo.src = collaborator.photo_url
  name.innerHTML = collaborator.name
  role.innerHTML = collaborator.role
  
  list.appendChild(collaboratorEl)

  if(collaborator.github_username){
    const githubLink = document.createElement('a')
    const githubIcon = document.createElement('img')
    githubIcon.src = './assets/imgs/github.svg'
    githubLink.appendChild(githubIcon)
    githubLink.href = `${githubEndPoint}/${collaborator.github_username}`
    githubLink.classList.add('contribIconLink')
    collaboratorEl.insertAdjacentElement("beforeend",githubLink)
  }
}

const list = document.querySelector('.list')

    const collaboratorEl = document.createElement('div')
    collaboratorEl.className = 'collaborator'

    const photo = document.createElement('img')
    const name = document.createElement('b')
    const role = document.createElement('span')
    collaboratorEl.appendChild(photo)
    collaboratorEl.appendChild(name)
    collaboratorEl.appendChild(role)

    photo.src = collaborator.photo_url
    name.innerHTML = collaborator.name
    role.innerHTML = collaborator.role

    list.appendChild(collaboratorEl)
}

let collaborators = [];

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readJsonFile("collaborators.json", function(text) {
    collaborators = JSON.parse(text);
    collaborators.forEach(addCollaborator);
});