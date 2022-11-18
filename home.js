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
  document.querySelector('.popup').style.display = 'none';
  // document.querySelector('.grid-container').style.filter = '';
  // document.querySelector('.toolbar').style.filter = '';
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
     headerName: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image1: 'assets/mobile/project1.svg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
     headerName: 'Data Dashboard Healthcare',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image1: 'assets/mobile/project1.svg',
    technologies: ['html', 'css'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
     headerName: 'Website Protfolio',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image1: 'assets/mobile/project1.svg',
    technologies: ['html', 'javascript', 'css', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
     headerName: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image1: 'assets/mobile/project1.svg',
    technologies: ['javascript', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
     headerName: 'Data Dashboard Healthcare',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image1: 'assets/mobile/project1.svg',
    technologies: ['Ruby', 'html'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
     headerName: 'Website Protfolio',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image1: 'assets/mobile/project1.svg',
    technologies: ['bootstrap'],
    liveLink: '#',
    sourceLink: '#',
  },
];

function showPopup() {
  document.querySelector('.popup').style.display = 'flex';
  // document.querySelector('.grid-container').style.filter = 'blur(5px)';
  // document.querySelector('.toolbar').style.filter = 'blur(5px)';
}




/* ----------------- Building Popup (Mobile) ---------------- */
document.addEventListener("DOMContentLoaded", function(event) {     


  const popupSection = document.querySelector('.popup');
  const closeSign = document.createElement('img');
  closeSign.classList.add('closesign');
  // closeSign.setAttribute('src', projectsCard[0].image2);
  // closeSign.setAttribute('alt', 'closesign');
  // closeSign.src = './assets/Icon.png';
  closeSign.alt = 'closesign';
  closeSign.onclick = hidePopup;
  const popupTitle = document.createElement('h3');
  const popupUl = document.createElement('ul');
  const popupImg = document.createElement('img');
  popupImg.alt = 'project';
  popupImg.className = 'image1';
  const popupDescription = document.createElement('p');
  const liveButton = document.createElement('button');
  liveButton.innerText = 'See Live';
  liveButton.className = 'btn-pop';
  const sourceButton = document.createElement('button');
  sourceButton.innerText = 'See Source';
  sourceButton.className = 'btn-pop';
  popupSection.append(
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
    popupTitle.innerText = projectPages[projectNumber]. headerName;
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
  // const imgDesktop = document.createElement('img');
  // imgDesktop.className = 'desktop-images last-project-image1';
  // imgDesktop.src = 'assets/desktop/last-project-desktop.svg';
  // imgDesktop.alt = 'last project desktop';
  const projectInnerDiv = document.createElement('div');
  projectInnerDiv.id = 'project-story';
  projectArticle.append(imageMob, projectInnerDiv);
  const projectH2 = document.createElement('h2');
  // projectH2.className = 'last-project-title';
  projectH2.innerText = projectPages[0]. headerName;
  const projectP = document.createElement('p');
  // projectP.className = 'last-project-supporting-text';
  projectP.innerText = projectPages[0].description;
  const projectUl = document.createElement('ul');
  // projectUl.className = 'last-project-items';
  for (let index = 0; index < projectPages[0].technologies.length; index += 1) {
    projectUl.innerHTML += `<li>${projectPages[0].technologies[index]}</li>`;
  }
  const seeProjectBtn = document.createElement('button');
  // seeProjectBtn.className = 'my-buttons last-project-button';
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

});

/* ----------------- Building OTHER projects part (Mobile) ---------------- */

// const otherProjectsSection = document.getElementById('other-projects-section');
// for (let index = 1; index < projectPages.length; index += 1) {
//   const projectArticle = document.createElement('article');
//   projectArticle.className = `project${index} other-projects-item`;
//   projectArticle.id = `project${index}`;
//   const h1 = document.createElement('h1');
//   h1.className = 'title-post';
//   h1.innerText = projectPages[index]. headerName;
//   const h2 = document.createElement('h2');
//   h2.className = 'supporting-text';
//   h2.innerText = projectPages[index].description;
//   const ul = document.createElement('ul');
//   ul.id = 'technologies';
//   for (let j = 0; j < projectPages[index].technologies.length; j += 1) {
//     let tech = '';
//     tech = projectPages[index].technologies[j];
//     ul.innerHTML += `<li>${tech}</li>`;
//   }
//   const button = document.createElement('button');
//   button.className = 'my-buttons';
//   button.onclick = () => {
//     bindPopup(index);
//   };
//   button.innerText = 'See Project';
//   otherProjectsSection.appendChild(projectArticle);
//   const myArticle = document.getElementById(projectArticle.id);
//   myArticle.append(h1, h2, ul, button);
// }
