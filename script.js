document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.title');
    const logo = document.querySelector('.logo');
    let currentIndex = 0;

    // Function to update the title
    function updateTitle() {
        titles.forEach((title) => {
            title.classList.remove('active');
        });

        const currentTitle = titles[currentIndex];
        currentTitle.classList.add('active');

        currentIndex = (currentIndex + 1) % titles.length;
    }

    // Function to trigger animation on logo click
    function animateTitle() {
        const title = document.querySelector('.home-content h1');
        title.classList.add('animate'); // Add a class to trigger animation

        // Remove the class after the animation ends to allow re-triggering
        title.addEventListener('animationend', () => {
            title.classList.remove('animate');
        });
    }

    // Initial state
    updateTitle();

    // Change title every 2.5 seconds
    setInterval(updateTitle, 2500);

    // Add click event to the logo
    logo.addEventListener('click', animateTitle);
});
