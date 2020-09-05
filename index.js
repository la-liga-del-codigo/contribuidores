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


const collaborators = [
  {
    name: 'Winner Crespo',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc',
    github_username: 'wistcc'
  },
  {
    name: 'Tomás Veras',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C5603AQEI2ZZ4dcn2cg/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=6tAxxoUXach6hw-hcRRMZ0xeebkk1Gf-pgFiZXEdYyM',
    github_username: 'vetom'
  },
  {
    name: 'Germán Popoteur',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C5603AQHUcFxBtfzqQA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=F9JKLJtgkfy4Fnm4XNKftNLLsdSBO6SU-BAggABkDtg',
    github_username: 'gpopoteur'
  },
  {
    name: 'Manuel Mejía',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFuanKZXUGDpw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Tgyu1azMy0pP4BjkTaTEq1IhEQdT5exvonj8XdNNbtg',
    github_username: 'mejiamanuel57',
  },
  {
    name: 'Nazaret Ramírez',
    role: 'Colaborador',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFQVzzxUEeW5w/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=XVSirKIqBfPjs84vlaWUnhBjHiHA0UJ30LRdQ-u0f6Y',
    github_username: 'nramirez'
  },
  {
    name: 'Miguel Rubio',
    role: 'Colaborador',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG8AIlKnq0HVQ/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=xXWvG7TLGAUK8JgxykxLNG5oZAfidNEeI0hd-Qpci3s',
    github_username:''
  },
   {
    name: 'Vladimir Reyes',
    role: 'Colaborador',
    photo_url: 'https://avatars1.githubusercontent.com/u/44329406?s=200&v=4https://avatars1.githubusercontent.com/u/44329406?s=240&v=4',
    github_username:'VladimirRs015'
  },
]

collaborators.forEach(addCollaborator)
