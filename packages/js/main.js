/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* kk starts */
const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const linkedinLink = document.querySelector(".linkes");

const testimonials = [
  {
    name: "» Chinmay Dalavi",
    position: "Sr. ML Engineer <small><class style='font-family:courier'> @Wipro AI Solutions</style>",
    photo: "./packages/images/ChinmayD.jfif",
    text: "We contibuted in same external project and Kunal's data driven stretegies were really helpful. His ability to uncover hidden data patterns and forecasted trends was instrumental in optimizing existing processes.",
    linkrefs: "https://www.linkedin.com/in/chinmay-dalvi-362a89a6/",
  },
  {
    name: "» Shivani Ayagole",
    position: "Big Data Developer<small><class style='font-family:courier'> @GSPANN Technologies</style>",
    photo: "./packages/images/ShivaniA.jfif",
    text: "I had the pleasure of working closely with Kunal and his analytical thinking shone brightly. He was consistently amazed us with the depth of insight derived from complex datasets, which directly contributed to our strategic decision-making.",
    linkrefs: "https://www.linkedin.com/in/shivani-ayagole-110/",
  },
  {
    name: "» Akshay Bharambe",
    position: "Principal SDE II <small><class style='font-family:courier'>@Connectwise</style>",
    photo: "./packages/images/AkshayB.jfif",
    text: "I was extremely satisfied with the automated AI-ML pipeline design and implement on GCP. Kunal's DS strategies were noticable,  he was great analytical thinker.",
    linkrefs: "https://www.linkedin.com/in/akshaybharambe14/",
  },
  {
    name: "» Swapnali Gunje",
    position: "Associate Consultant<small><class style='font-family:courier'> @Red Hat</style>",
    photo: "./packages/images/SwapnaliG.jfif",
    text: "He was expert in machine learning and Kunal'showed a high level of professionalism while working with GitHub project. I was very happy with contibuting with him.",
    linkrefs: "https://www.linkedin.com/in/ssgunje/",
  },
  {
    name: "» Ankit Sinha",
    position: "Associate DE Manager <small><class style='font-family:courier'>@Tredence Inc</style>",
    photo: "./packages/images/AnkitS.jfif",
    text: "During our time together at GSPANN, he had exceptional problem-solving skills firsthand with data pipeline management and DS integrations for in-house modules.",
    linkrefs: "https://www.linkedin.com/in/ankit-sinha-534689130/",
  },
  {
    name: "» Mrinal Dhasmana",
    position: "Data Scientist <small><class style='font-family:courier'>@GSPANN Technologies</style>",
    photo: "./packages/images/MrinalD.jfif",
    text: "I had the privilege of collaborating with Kunal on several critical DS modules in project. His leadership in integrating data science with business objectives was exemplary. Also, he is always trying out new AI modules and guided team members.",
    linkrefs: "https://www.linkedin.com/in/mrinaldhasmana/",
  },
  {
    name: "» Hitech Chaudhari",
    position: "Technical Lead <small><class style='font-family:courier'>@GSPANN Technologies</style>",
    photo: "./packages/images/HiteshC.jfif",
    text: "I closely worked with Kunal on integrations of ML regression models on AWS with React, TypeScript, VueJS. His Data Science methods with API integrations were excellent. We had shared same Tech Space for ChatBot design recently.",
    linkrefs: "https://www.linkedin.com/in/hitesh-suresh-chaudhari/",
  },
  {
    name: "» Aparna Singh",
    position: "Sr. Data Science Consultant<small><class style='font-family:courier'> @eClerx</style>",
    photo: "./packages/images/AparnaS.jfif",
    text: "Kunal contributed in out team at Tech Fest Forum earlier, where I observed his impressive adaptability and learning agility. He has very good knowledge in AI-ML tools.",
    linkrefs: "https://www.linkedin.com/in/aparna-singh-33b383193/",
  },
  {
    name: "» Nipun Borole",
    position: "Sr. Technical Analyst <small><class style='font-family:courier'>@Jade Global Solutions</style>",
    photo: "./packages/images/NipunB.jfif",
    text: "Kunal consistently inspired the team to push boundaries on AI-ML fields and deliver outstanding demonstrations. He was hard-working, speaker, good asset with AI-ML technoloogies.",
    linkrefs: "https://www.linkedin.com/in/nipun294/",
  },
  {
    name: "» Aishna Arora",
    position: "Data Scientist <small><class style='font-family:courier'> @JP Morgan & Chase</style>",
    photo: "./packages/images/AishnaA.jfif",
    text: "Kunal's proactive approach to continuous learning significantly contributed to our POC product. He was part of DS event and contributed in event via GitHib.",
    linkrefs: "https://www.linkedin.com/in/aishna-arora-b92175197/",
  },
  {
    name: "» Saurabh Chaudhari",
    position: "Data Science Developer<small><class style='font-family:courier'> @Mercedes-Benz R&D India</style>",
    photo: "./packages/images/SaurabhC.jfif",
    text: "DS algorithms explanations and implementation skills of Kunal was remarkable and enhanced our ability to deliver impactful results on the project phases.",
    linkrefs: "https://www.linkedin.com/in/saurabh-chaudhari-3709b7180/",
  },
  {
    name: "» Trupti Chavan",
    position: "Lead Data Scientist <small><class style='font-family:courier'> @Deloitte</style>",
    photo: "./packages/images/TruptiC.jfif",
    text: "Kunal's most impressive characteristic is their passion for helping us solve our problems. He truly believe in what we're trying to achieve and confident on delivering AI-ML solutions.",
    linkrefs: "https://www.linkedin.com/in/trupti-chavan-992a999b/",
  },
  {
    name: "» Mangesh Meshram",
    position: "Sr. Technical Lead <small><class style='font-family:courier'>@KPIT Technologies</style>",
    photo: "./packages/images/MangeshM.jfif",
    text: "It was untangling intricate data issues / devising innovative solutions, approached every challenge with a blend of methodical analysis and creative thinking by Kunal resulting to quick resolutions and achieving project goals.",
    linkrefs: "https://www.linkedin.com/in/mangesh-meshram-b3419161/",
  },
  {
    name: "» Shlok Borole",
    position: "Big Data Engineer<small><class style='font-family:courier'> @RBL Bank</style>",
    photo: "./packages/images/ShlokB.jfif",
    text: "Kunal was my mentor and he was excellent at DS side. His guidance, support and mock interview session was valuable.",
    linkrefs: "https://www.linkedin.com/in/shlok-borole-1908/",
  },
  {
    name: "» Nidhi Chaudhari",
    position: "Lead HR<small><class style='font-family:courier'> @KPIT Technologies</style>",
    photo: "./packages/images/NidhiS.jfif",
    text: "Kunal is quick learner and anlytical thinker. He was in-house project module and delivered automated ML pipeline based on NLP and stats mechanisms.",
    linkrefs: "https://www.linkedin.com/in/nidhi-chaudhari-386306115/",
  },
  {
    name: "» Rajan Bhirud",
    position: "Sr. System Engineer<small><class style='font-family:courier'> @NVDIA</style>",
    photo: "./packages/images/RajanB.jfif",
    text: "Kunal was forthright on the probabilistic nature of developing AI-ML solutions to challenging environments. A lot of the data driven work had some experimentals during our meets-ups.",
    linkrefs: "https://www.linkedin.com/in/rajan-bhirud/",
  },
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text, linkrefs } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  linkedinLink.href = linkrefs;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 4000);

