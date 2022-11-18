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

const projectPages = [
  {
     headerName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image1: 'assets/mobile/last-project-mobile.svg',
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


// const div1 = document.createElement('div');
//       div1.classList.add('multi-cont');

//       const div2 = document.createElement('div');
//       div2.classList.add('multi-stories');
//       div2.textContent = projectsCard[0].tittle;
//       div1.appendChild(div2);

//       const ul1 = document.createElement('ul');
//       ul1.classList.add('ul-tech1');
//       div1.appendChild(ul1);
//       for (let i = 0; i < projectsCard[0].technologies.length; i += 1) {
//         const li1 = document.createElement('li');
//         li1.classList.add('li-pop');
//         ul1.appendChild(li1);
//         li1.textContent = projectsCard[0].technologies[i];
//       }

//       const element1 = document.querySelector('body');
//       element1.appendChild(div1);

//       const img = document.createElement('img');
//       img.classList.add('image1');
//       img.setAttribute('src', projectsCard[0].image);
//       img.setAttribute('alt', 'project image');
//       img.setAttribute('width', 'auto');
//       img.setAttribute('height', '586');
//       div1.appendChild(img);

//       const div3 = document.createElement('div');
//       div3.classList.add('div3');
//       div1.appendChild(div3);

//       const text = document.createElement('div');
//       text.classList.add('multitext');
//       text.textContent = projectsCard[0].description;
//       div3.appendChild(text);

//       const div4 = document.createElement('div');
//       div3.classList.add('div4');
//       div3.appendChild(div4);

//       const btnPop = document.createElement('button');
//       btnPop.classList.add('btn-pop');
//       div4.appendChild(btnPop);
//       const aBtn = document.createElement('a');
//       aBtn.href = projectsCard[0].linkLiveVersion;
//       btnPop.appendChild(aBtn);
//       aBtn.textContent = 'See Live';
//       const icon1 = document.createElement('img');
//       icon1.classList.add('icon1');
//       icon1.setAttribute('src', projectsCard[0].image3);
//       icon1.setAttribute('alt', 'see live image');
//       btnPop.appendChild(icon1);

//       const ctnPop = document.createElement('button');
//       ctnPop.classList.add('btn-pop');
//       div4.appendChild(ctnPop);
//       const aBtn2 = document.createElement('a');
//       aBtn2.href = projectsCard[0].linkSource;
//       ctnPop.appendChild(aBtn2);
//       aBtn2.textContent = 'See Source';
//       const icon2 = document.createElement('img');
//       icon2.classList.add('icon1');
//       icon2.setAttribute('src', projectsCard[0].image4);
//       icon2.setAttribute('alt', 'see live image');
//       ctnPop.appendChild(icon2);

//       const closeSign = document.createElement('img');
//       closeSign.classList.add('closesign');
//       closeSign.setAttribute('src', projectsCard[0].image2);
//       closeSign.setAttribute('alt', 'closesign');
//       div2.appendChild(closeSign);

function showPopup() {
  document.querySelector('.popup').style.display = 'flex';
  // document.querySelector('.grid-container').style.filter = 'blur(5px)';
  // document.querySelector('.toolbar').style.filter = 'blur(5px)';
}


/* ----------------- Building Popup (Mobile) ---------------- */

const closeSign = document.createElement('img');
closeSign.classList.add('closesign');
// closeSign.setAttribute('src', projectsCard[0].image2);
// closeSign.setAttribute('alt', 'closesign');
closeSign.src = 'assets/mobile/x.svg';
closeSign.alt = 'closesign';
popupX.onclick = hidePopup;
const popupTitle = document.createElement('h3');
const popupUl = document.createElement('ul');
const popupimg = document.createElement('img');
popupimg.alt = 'project';
popupimg.className = 'image1';
const popupDescription = document.createElement('p');
const liveButton = document.createElement('button');
liveButton.innerText = 'See Live';
liveButton.className = 'btn-pop';
const sourceButton = document.createElement('button');
sourceButton.innerText = 'See Source';
sourceButton.className = 'btn-pop';
popupSection.append(
  popupX,
  popupTitle,
  popupUl,
  popupimg,
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
  popupimg.src = projectPages[projectNumber].image1;
  popupDescription.innerText = projectPages[projectNumber].description;
  showPopup();
}

/* ----------------- Building LAST project part (Mobile) ---------------- */

const lastProjectsArticle = document.querySelector('.last-project');
const imgMobile = document.createElement('img');
imgMobile.className = 'last-project-image1-mobile mobile-only';
imgMobile.src = 'assets/mobile/last-project-mobile.svg';
imgMobile.alt = 'last project';
const imgDesktop = document.createElement('img');
imgDesktop.className = 'desktop-images last-project-image1';
imgDesktop.src = 'assets/desktop/last-project-desktop.svg';
imgDesktop.alt = 'last project desktop';
const lastProjectInnerSection = document.createElement('section');
lastProjectsArticle.append(imgMobile, imgDesktop, lastProjectInnerSection);
const lastProjectH2 = document.createElement('h2');
lastProjectH2.className = 'last-project-title';
lastProjectH2.innerText = projectPages[0]. headerName;
const lastProjectP = document.createElement('p');
lastProjectP.className = 'last-project-supporting-text';
lastProjectP.innerText = projectPages[0].description;
const lastProjectUl = document.createElement('ul');
lastProjectUl.className = 'last-project-items';
for (let index = 0; index < projectPages[0].technologies.length; index += 1) {
  lastProjectUl.innerHTML += `<li>${projectPages[0].technologies[index]}</li>`;
}
const lastProjectButton = document.createElement('button');
lastProjectButton.className = 'my-buttons last-project-button';
lastProjectButton.onclick = () => {
  bindPopup(0);
};
lastProjectButton.innerText = 'See Project';
lastProjectInnerSection.append(
  lastProjectH2,
  lastProjectP,
  lastProjectUl,
  lastProjectButton,
);

/* ----------------- Building OTHER projects part (Mobile) ---------------- */

const otherProjectsSection = document.getElementById('other-projects-section');
for (let index = 1; index < projectPages.length; index += 1) {
  const projectArticle = document.createElement('article');
  projectArticle.className = `project${index} other-projects-item`;
  projectArticle.id = `project${index}`;
  const h1 = document.createElement('h1');
  h1.className = 'title-post';
  h1.innerText = projectPages[index]. headerName;
  const h2 = document.createElement('h2');
  h2.className = 'supporting-text';
  h2.innerText = projectPages[index].description;
  const ul = document.createElement('ul');
  ul.id = 'technologies';
  for (let j = 0; j < projectPages[index].technologies.length; j += 1) {
    let tech = '';
    tech = projectPages[index].technologies[j];
    ul.innerHTML += `<li>${tech}</li>`;
  }
  const button = document.createElement('button');
  button.className = 'my-buttons';
  button.onclick = () => {
    bindPopup(index);
  };
  button.innerText = 'See Project';
  otherProjectsSection.appendChild(projectArticle);
  const myArticle = document.getElementById(projectArticle.id);
  myArticle.append(h1, h2, ul, button);
}
