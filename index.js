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
}

const collaborators = [
  {
    name: 'Winner Crespo',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
  {
    name: 'Tomás Veras',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C5603AQEI2ZZ4dcn2cg/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=6tAxxoUXach6hw-hcRRMZ0xeebkk1Gf-pgFiZXEdYyM'
  },
  {
    name: 'Germán Popoteur',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C5603AQHUcFxBtfzqQA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=F9JKLJtgkfy4Fnm4XNKftNLLsdSBO6SU-BAggABkDtg'
  },
  {
    name: 'Manuel Mejía',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFuanKZXUGDpw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Tgyu1azMy0pP4BjkTaTEq1IhEQdT5exvonj8XdNNbtg'
  },
  {
    name: 'Nazaret Ramírez',
    role: 'Colaborador',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFQVzzxUEeW5w/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=XVSirKIqBfPjs84vlaWUnhBjHiHA0UJ30LRdQ-u0f6Y'
  },
  {
    name: 'Miguel Rubio',
    role: 'Colaborador',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG8AIlKnq0HVQ/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=xXWvG7TLGAUK8JgxykxLNG5oZAfidNEeI0hd-Qpci3s'
  },
]

collaborators.forEach(addCollaborator)
