// script.js
document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.title');
    let currentIndex = 0;
    
    function updateTitle() {
        // Remove active class and add inactive to previous
        titles.forEach((title, index) => {
            if (index === currentIndex - 1 || (currentIndex === 0 && index === titles.length - 1)) {
                title.classList.add('inactive');
            } else {
                title.classList.remove('inactive');
            }
            title.classList.remove('active');
            
            // Reset animations
            if (title.classList.contains('programmer')) {
                title.style.width = '0';
            }
            if (title.classList.contains('designer')) {
                const path = title.querySelector('.path');
                if (path) {
                    path.style.strokeDashoffset = '310';
                }
            }
        });
        
        // Add active class to current title
        const currentTitle = titles[currentIndex];
        currentTitle.classList.add('active');
        
        // Handle specific animations
        if (currentTitle.classList.contains('programmer')) {
            currentTitle.style.width = currentTitle.scrollWidth + 'px';
        }
        
        // Update index for next iteration
        currentIndex = (currentIndex + 1) % titles.length;
    }

    // Initial state
    updateTitle();
    
    // Change title every 3.5 seconds
    setInterval(updateTitle, 2500);
});