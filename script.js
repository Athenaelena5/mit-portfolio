const words = ["Grafisk Designer", "Webudvikler", "Frontendudvikler", "UX/UI Researcher"];
let index = 0;
let currentWord = '';
let letterIndex = 0;
let slideIndex = 0;
let isAnimating = false; 
let currentSlideIndex = 0;
const titles = [
    "Jerry's Restaurant & Teria",
    "Steeno Museum",
    "Nippon Måltidskasser"
]; 

const slides = [
    {
        text: "Slide 1: Lorem ipsum dolor sit amet.",
        linkedin: "http://jerrys-eksamen.aeh.dk",
        github: "https://github.com/Athenaelena5"
    },
    {
        text: "Slide 2: Consectetur adipiscing elit.",
        linkedin: "http://interaktiv-storytelling.aeh.dk",
        github: "https://github.com/Athenaelena5"
    },
    {
        text: "Slide 3: Sed do eiusmod tempor incididunt.",
        linkedin: "https://www.linkedin.com/in/yet-another-profile/",
        github: "https://github.com/Athenaelena5"
    }
];

let slideTexts = [
    "I mit arbejde med Jerry's Restaurant har jeg været involveret i flere aspekter af deres digitale tilstedeværelse, herunder UX/UI, design og kodning. Jeg har arbejdet med at skabe en brugervenlig og æstetisk appellerende oplevelse, der afspejler restaurantens varme og kvalitet. Fra design af interface til kodning af funktioner, har jeg sikret, at både funktionalitet og visuel identitet er i harmoni og lever op til gæsternes forventninger. Herunder finder du et link til hjemmesiden og mit Github repository.",
    "I mit arbejde med Steno Museum har jeg været involveret i at udvikle en digital løsning, der fremmer museets interaktive og læringsrige oplevelser. Jeg har arbejdet med at skabe en brugervenlig og engagerende platform, der gør det muligt for besøgende at dykke dybere ned i udstillingerne, både under og efter deres besøg. Fra design af interface til kodning af funktionalitet har jeg sikret, at løsningen understøtter museets mål om at gøre videnskab og historie tilgængeligt for et bredt publikum. Herunder finder du et link til hjemmesiden og mit Github repository.",
    "Text for Nippon Måltidskasser" 
];

function type() {
    if (letterIndex < words[index].length) {
        currentWord += words[index].charAt(letterIndex);
        document.querySelector('.title').textContent = currentWord;
        letterIndex++;
        setTimeout(type, 70);
    } else {
        setTimeout(deleteWord, 2000); 
    }
}

function deleteWord() {
    if (letterIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        document.querySelector('.title').textContent = currentWord;
        letterIndex--;
        setTimeout(deleteWord, 70);
    } else {
        index = (index + 1) % words.length;
        setTimeout(type, 500); 
    }
}

// Typing effect
type();

showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("projekter-image");
    const dots = document.getElementsByClassName("dot");
    

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active"; 
}

function currentSlide(n) {
    currentSlideIndex = n - 1; 
    updateSlide();
}

function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slideTexts.length - 1; 
    } else if (currentSlideIndex >= slideTexts.length) {
        currentSlideIndex = 0; 
    }
    updateSlide();
}

function updateSlide() {
    const slideText = document.getElementById("slide-text");
    const slideSocial = document.getElementById("slide-social");

    // Update text
    slideText.textContent = slideTexts[currentSlideIndex];

    // Update links
    slideSocial.innerHTML = `
        <a href="${slides[currentSlideIndex].linkedin}" target="_blank" rel="noopener noreferrer">
            <i class="bx bx-link"></i>
        </a>
        <a href="${slides[currentSlideIndex].github}" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
        </a>
    `;

    // image
    const images = document.querySelectorAll('.projekter-image');
    images.forEach((img, index) => {
        img.style.display = index === currentSlideIndex ? 'block' : 'none';
    });

    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.className = index === currentSlideIndex ? 'dot active' : 'dot';
    });

    // title
    const slideTitle = document.querySelector('.slide-title'); //  HTML structure match
    slideTitle.textContent = titles[currentSlideIndex]; // Update title
}

// the first slide
updateSlide();

// Start slideshow
showSlides();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }

    })
}

// Add event listener to the menu icon
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class
});
