const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const uiContainer = document.getElementById('ui-container');
const videoSection = document.getElementById('video-section');
const dogVideo = document.getElementById('dogVideo');

/**
 * Function to move the 'No' button to a random spot
 */
const moveNoButton = () => {
    // Switch to absolute positioning so it can escape the flexbox
    if (noBtn.style.position !== 'absolute') {
        noBtn.style.position = 'absolute';
    }

    // Calculate random coordinates within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // GSAP animation for the "Jump"
    gsap.to(noBtn, {
        duration: 0.1,
        left: x,
        top: y,
        ease: "power2.out"
    });
};

// Event Listeners for the "No" button
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking on mobile
    moveNoButton();
});

// Event Listener for the "Yes" button
yesBtn.addEventListener('click', () => {
    // Hide question, show video
    uiContainer.classList.add('hidden');
    videoSection.classList.remove('hidden');
    
    // Play video automatically
    dogVideo.play();
    
    // Optional: Unmute if you want the dog sounds!
    // dogVideo.muted = false;
});