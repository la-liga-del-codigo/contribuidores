const collaborators = [
  {
    name: 'Winner Crespo',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
  {
    name: 'Tomás Veras',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
  {
    name: 'Germán Popoteur',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
  {
    name: 'Manuel Mejía',
    role: 'Propietario',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
  {
    name: 'Nazaret Ramírez',
    role: 'Colaborador',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
  {
    name: 'Miguel Rubio',
    role: 'Colaborador',
    photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBPcza7XsREQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4xbvuWqc5YmeYmsEXTtfNg_f9S3hzIf31LH48l8sbxc'
  },
]

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

collaborators.forEach(addCollaborator)
