const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const links = document.querySelectorAll('a');
links.forEach((currentValue, i) => (currentValue.textContent = Object.values(siteContent.nav)[i]));

links.forEach((item) => (item.style.color = '#b0b0b0'));

const addLink = document.querySelector('nav');

const header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const buttonText = document.querySelector('button');

buttonText.textContent = 'Get Started';

const headerText = document.querySelector('h1');
headerText.innerText = siteContent.cta.h1;


const mainHead = document.querySelectorAll('.text-content *');

mainHead[0].textContent = ('h4', siteContent['main-content'] ['features-h4']);

mainHead[1].textContent = ('h4', siteContent['main-content'] ['about-h4']);

mainHead[2].textContent = ('h4', siteContent['main-content'] ['services-h4']);

mainHead[3].textContent = ('h4', siteContent['main-content'] ['product-h4']);

mainHead[4].textContent = ('h4', siteContent['main-content'] ['vision-h4']);

const mainText = document.querySelectorAll('.text-content');

mainText[0].textContent = ('p', siteContent['main-content'] ['features-content']);

mainText[1].textContent = ('p', siteContent['main-content'] ['about-content']);

mainText[2].textContent = ('p', siteContent['main-content'] ['services-content']);

mainText[3].textContent = ('p', siteContent['main-content'] ['product-content']);

mainText[4].textContent = ('p', siteContent['main-content'] ['vision-content']);


/// CONTACT ///

const contactText = document.querySelectorAll ('.contact *')

contactText[0].textContent = ('h4', siteContent['contact'] ['contact-h4']);

contactText[1].textContent = ('p', siteContent['contact'] ['address']);

contactText[2].textContent = ('p', siteContent['contact'] ['phone']);

contactText[3].textContent = ('p', siteContent['contact'] ['email']);

/// FOOTER ///

const footerText = document.querySelectorAll ('footer')

footerText[0].textContent = ('p', siteContent['footer'] ['copyright']);


