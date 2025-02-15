const words = ["Grafisk", "Web Design", "UX & UI"]; // Add your words here
let index = 0;
let currentWord = '';
let letterIndex = 0;
const typingSpeed = 100; // Speed of typing effect in milliseconds
const erasingSpeed = 50; // Speed of erasing effect in milliseconds
const pauseBetweenWords = 1000; // Pause before starting the next word

function type() {
    if (letterIndex < currentWord.length) {
        document.getElementById("expertise").textContent += currentWord.charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, pauseBetweenWords);
    }
}

function erase() {
    const expertiseElement = document.getElementById("expertise");
    if (letterIndex > 0) {
        expertiseElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % words.length; // Cycle through words
        currentWord = words[index];
        letterIndex = 0; // Reset letter index for the new word
        setTimeout(type, typingSpeed); // Start typing the next word
    }
}

function startTyping() {
    currentWord = words[index];
    type();
}

startTyping(); // Start the typing effect
