const words = ["Grafisk Designer", "Webudvikler", "Frontendudvikler", "UX/UI Researcher"];
let index = 0;
let currentWord = '';
let letterIndex = 0;
let slideIndex = 0;
let isAnimating = false; // Flag to prevent rapid clicking
let currentSlideIndex = 0;
const titles = [
    "Jerry's Restaurant & Teria",
    "Steeno Museum",
    "Nippon Måltidskasser"
]; // Array of titles corresponding to each slide

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
    // Add more slides as needed
];

let slideTexts = [
    "I mit arbejde med Jerry's Restaurant har jeg været involveret i flere aspekter af deres digitale tilstedeværelse, herunder UX/UI, design og kodning. Jeg har arbejdet med at skabe en brugervenlig og æstetisk appellerende oplevelse, der afspejler restaurantens varme og kvalitet. Fra design af interface til kodning af funktioner, har jeg sikret, at både funktionalitet og visuel identitet er i harmoni og lever op til gæsternes forventninger. Herunder finder du et link til hjemmesiden og mit Github repository.",
    "I mit arbejde med Steno Museum har jeg været involveret i at udvikle en digital løsning, der fremmer museets interaktive og læringsrige oplevelser. Jeg har arbejdet med at skabe en brugervenlig og engagerende platform, der gør det muligt for besøgende at dykke dybere ned i udstillingerne, både under og efter deres besøg. Fra design af interface til kodning af funktionalitet har jeg sikret, at løsningen understøtter museets mål om at gøre videnskab og historie tilgængeligt for et bredt publikum. Herunder finder du et link til hjemmesiden og mit Github repository.",
    "Text for Nippon Måltidskasser" // Add the corresponding text for each slide
];

function type() {
    if (letterIndex < words[index].length) {
        currentWord += words[index].charAt(letterIndex);
        document.querySelector('.title').textContent = currentWord;
        letterIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(deleteWord, 2000); // Wait before starting to delete
    }
}

function deleteWord() {
    if (letterIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        document.querySelector('.title').textContent = currentWord;
        letterIndex--;
        setTimeout(deleteWord, 100); // Adjust deleting speed here
    } else {
        index = (index + 1) % words.length; // Move to the next word
        setTimeout(type, 500); // Wait before starting to type the next word
    }
}

// Start the typing effect
type();

showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("projekter-image");
    const dots = document.getElementsByClassName("dot");
    
    // Hide all slides and remove active class from all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
        dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
    }
    
    slides[slideIndex].style.display = "block"; // Show the current slide
    dots[slideIndex].className += " active"; // Add active class to the current dot
}

function currentSlide(n) {
    currentSlideIndex = n - 1; // Adjust for zero-based index
    updateSlide();
}

function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slideTexts.length - 1; // Loop back to the last slide
    } else if (currentSlideIndex >= slideTexts.length) {
        currentSlideIndex = 0; // Loop back to the first slide
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

    // Update the displayed image
    const images = document.querySelectorAll('.projekter-image');
    images.forEach((img, index) => {
        img.style.display = index === currentSlideIndex ? 'block' : 'none';
    });

    // Update the active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.className = index === currentSlideIndex ? 'dot active' : 'dot';
    });

    // Update the title for the current slide
    const slideTitle = document.querySelector('.slide-title'); // Ensure this matches your HTML structure
    slideTitle.textContent = titles[currentSlideIndex]; // Update title
}

// Initialize the first slide
updateSlide();

// Start the slideshow
showSlides();
