/** @format */

import image00Preview from "../img/projects/00/preview.jpg";
import image00_01 from "../img/projects/00/desktop-01.png";
import image00_02 from "../img/projects/00/desktop-02.png";
import image00_03 from "../img/projects/00/desktop-03.png";

import image01Preview from "../img/projects/01/preview.jpg";
import image01_01 from "../img/projects/01/desktop-01.png";
import image01_02 from "../img/projects/01/mobile-02.png";
import image01_03 from "../img/projects/01/desktop-03.png";

import image02Preview from "../img/projects/02/preview.jpg";
import image02_01 from "../img/projects/02/desktop-01.png";
import image02_02 from "../img/projects/02/desktop-02.png";
import image02_03 from "../img/projects/02/desktop-03.png";
import image02_fullPage from "../img/projects/02/fullPage.jpg";

import image03Preview from "../img/projects/03/preview.jpg";
import image03_01 from "../img/projects/03/desktop-01.png";
import image03_02 from "../img/projects/03/desktop-02.png";
import image03_03 from "../img/projects/03/desktop-03.png";
import image03_fullPage from "../img/projects/03/fullPage.jpg";

import image04Preview from "../img/projects/04/preview.png";
import image04_01 from "../img/projects/04/desktop-01.png";
import image04_02 from "../img/projects/04/desktop-02.png";
import image04_03 from "../img/projects/04/desktop-03.png";
import image04_04 from "../img/projects/04/desktop-04.png";
import image04_fullPage from "../img/projects/04/fullPage.jpg";

import image05Preview from "../img/projects/05/preview.jpg";
import image05_01 from "../img/projects/05/desktop-01.png";
import image05_02 from "../img/projects/05/desktop-02.png";
import image05_fullPage from "../img/projects/05/fullPage.jpg";

export const projects = [
  {
    id: 0,
    title: "TypeRocket",
    skills:
      "React, TypeScript, Redux, RTK-Query, SCSS, Express, PostgreSQL, JWT",
    previewImgUrl: image00Preview,
    fullPageImgUrl: null,
    sliderImgUrls: [image00_01, image00_02, image00_03],
    gitHubLink: "https://github.com/Soshinoya/TypeRocket",
    websiteLink: "https://typerocket.onrender.com/",
  },
  {
    id: 1,
    title: "Kaivo - social network",
    skills: "React, Firebase, Yandex-Cloud-API, SCSS, React-Router-Dom",
    previewImgUrl: image01Preview,
    fullPageImgUrl: null,
    sliderImgUrls: [image01_01, image01_02, image01_03],
    gitHubLink: "https://github.com/Soshinoya/KAIVO",
    websiteLink: "https://kaivo.netlify.app/",
  },
  {
    id: 2,
    title: "Swipe",
    skills: "React Bootstrap GSAP",
    previewImgUrl: image02Preview,
    fullPageImgUrl: image02_fullPage,
    sliderImgUrls: [image02_01, image02_02, image02_03],
    gitHubLink: "https://github.com/Soshinoya/Swipe",
    websiteLink: "https://swipe-landing.netlify.app/",
  },
  {
    id: 3,
    title: "Qubit",
    skills: "React Bootstrap GSAP",
    previewImgUrl: image03Preview,
    fullPageImgUrl: image03_fullPage,
    sliderImgUrls: [image03_01, image03_02, image03_03],
    gitHubLink: "https://github.com/Soshinoya/Qubit",
    websiteLink: "https://serene-kashata-b6fa18.netlify.app/",
  },
  {
    id: 4,
    title: "Hounter",
    skills: "Gulp SCSS Bootstrap",
    previewImgUrl: image04Preview,
    fullPageImgUrl: image04_fullPage,
    sliderImgUrls: [image04_01, image04_02, image04_03, image04_04],
    githubLink: "",
    websiteLink: "",
  },
  {
    id: 5,
    title: "Car Musc",
    skills: "Gulp SCSS Nunjucks",
    previewImgUrl: image05Preview,
    fullPageImgUrl: image05_fullPage,
    sliderImgUrls: [image05_01, image05_02],
    gitHubLink: "https://github.com/Soshinoya/Musc",
    websiteLink: "",
  },
];
