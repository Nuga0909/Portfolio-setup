/* eslint-disable linebreak-style */
window.onload = function () {
  const hamburger = document.querySelector('#nav-mobile');
  const nav = document.querySelector('.nav-lists');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav-list').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }));
};

function hidePopup() {
  document.querySelector('.multi-cont').style.display = 'none';
}

const projectPages = [
  {
    headerName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image1: './assets/Img Placeholder - 2.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    headerName: 'Profesional Art',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image1: './assets/Placeholder44b.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    headerName: 'Data Dashboard',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
    image1: './assets/Placeholder44b.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    headerName: 'Website Protfolio',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
    image1: './assets/Placeholder44b.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    headerName: 'Profesional Art',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
    image1: './assets/Placeholder44b.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    headerName: 'Data Dashboard',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
    image1: './assets/Placeholder44b.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    headerName: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
    image1: './assets/Placeholder44b.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
];

function showPopup() {
  document.querySelector('.multi-cont').style.display = 'flex';
}

/* ----------------- Building Popup (Mobile) ---------------- */
document.addEventListener('DOMContentLoaded', (event) => {
  const popupSection = document.querySelector('.multi-cont');
  const popupCont = document.createElement('div');
  popupCont.className = 'multi-cont2';
  popupSection.append(popupCont);
  const closeSign = document.createElement('img');
  closeSign.classList.add('closesign');
  closeSign.src = './assets/Icon.png';
  closeSign.alt = 'closesign';
  closeSign.onclick = hidePopup;
  const popupTitle = document.createElement('h3');
  popupTitle.className = 'multi-stories';
  const popupUl = document.createElement('ul');
  popupUl.className = 'ul-tech1';
  const popupImg = document.createElement('img');
  popupImg.alt = 'project';
  popupImg.className = 'image1';
  const popupDescription = document.createElement('p');
  popupDescription.className = 'multitext';
  const liveButton = document.createElement('button');
  liveButton.innerText = 'See Live';
  liveButton.className = 'btn-pop';
  const sourceButton = document.createElement('button');
  sourceButton.innerText = 'See Source';
  sourceButton.className = 'btn-pop';
  popupCont.append(
    closeSign,
    popupTitle,
    popupUl,
    popupImg,
    popupDescription,
    liveButton,
    sourceButton,
  );

  /* ----------------- Binding Popup (Mobile) ---------------- */

  function bindPopup(projectNumber) {
    popupTitle.innerText = projectPages[projectNumber].headerName;
    popupUl.innerHTML = '';
    for (
      let index = 0;
      index < projectPages[projectNumber].technologies.length;
      index += 1
    ) {
      popupUl.innerHTML += `<li>${projectPages[projectNumber].technologies[index]}</li>`;
    }
    popupSection.appendChild(popupUl);
    popupImg.src = projectPages[projectNumber].image1;
    popupDescription.innerText = projectPages[projectNumber].description;
    showPopup();
  }

  /* ----------------- Building LAST project part (Mobile) ---------------- */

  const projectArticle = document.querySelector('#project');
  const imageMob = document.createElement('img');
  // imageMob.className = 'last-project-image1-mobile mobile-only';
  imageMob.src = './assets/Img Placeholder.png';
  imageMob.alt = 'project image';
  const projectInnerDiv = document.createElement('div');
  projectInnerDiv.id = 'project-story';
  projectArticle.append(imageMob, projectInnerDiv);
  const projectH2 = document.createElement('h2');
  projectH2.innerText = projectPages[0].headerName;
  const projectP = document.createElement('p');
  projectP.innerText = projectPages[0].description;
  const projectUl = document.createElement('ul');
  for (let index = 0; index < projectPages[0].technologies.length; index += 1) {
    projectUl.innerHTML += `<li>${projectPages[0].technologies[index]}</li>`;
  }
  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.onclick = () => {
    bindPopup(0);
  };
  seeProjectBtn.innerText = 'See Project';
  projectInnerDiv.append(
    projectH2,
    projectP,
    projectUl,
    seeProjectBtn,
  );

  /* ----------------- Building OTHER projects part (Mobile) ---------------- */

  const otherProjectsSection = document.getElementById('projects-container');
  for (let index = 1; index < projectPages.length; index += 1) {
    const projectArticle = document.createElement('article');
    projectArticle.className = 'other-projects';
    projectArticle.id = `project${index}`;
    const otherProjectsH2 = document.createElement('h2');
    otherProjectsH2.className = 'title-post hover';
    otherProjectsH2.innerText = projectPages[index].headerName;
    const otherProjectsP = document.createElement('p');
    otherProjectsP.className = 'supporting-text hover';
    otherProjectsP.innerText = projectPages[index].description;
    const ul = document.createElement('ul');
    ul.className = 'hover';
    for (let j = 0; j < projectPages[index].technologies.length; j += 1) {
      let tech = '';
      tech = projectPages[index].technologies[j];
      ul.innerHTML += `<li>${tech}</li>`;
    }
    const button = document.createElement('button');
    button.onclick = () => {
      bindPopup(index);
    };
    button.innerText = 'See Project';
    otherProjectsSection.appendChild(projectArticle);
    const newArt = document.getElementById(projectArticle.id);
    newArt.append(otherProjectsH2, otherProjectsP, ul, button);
  }
});
