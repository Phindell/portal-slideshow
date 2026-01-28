// Your Cloudinary configuration
const CLOUD_NAME = 'du8kevdcc';

// Add your photo public IDs here (the part after /upload/v######/)
// You can get these from your Cloudinary Media Library
const photoIds = [
    'WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q',
    'cld-sample-5',
    'cld-sample-4',
    // Add more photo IDs here as you upload more photos
];

// Slideshow settings
let currentIndex = 0;
let autoPlayInterval;
let isPlaying = true;
const SLIDE_DURATION = 7000; // 7 seconds per photo (adjust as needed)

// DOM elements
const imageElement = document.getElementById('slideshow-image');
const counterElement = document.getElementById('photo-counter');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Build Cloudinary URL from public ID
function getCloudinaryUrl(publicId) {
    // Using auto quality and format for best performance
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto/${publicId}.jpg`;
}

// Show a specific photo
function showPhoto(index) {
    if (photoIds.length === 0) {
        imageElement.src = '';
        counterElement.textContent = 'No photos added yet';
        return;
    }

    // Wrap around if needed
    if (index < 0) {
        currentIndex = photoIds.length - 1;
    } else if (index >= photoIds.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Fade out
    imageElement.classList.remove('visible');

    // Wait for fade out, then change image
    setTimeout(() => {
        imageElement.src = getCloudinaryUrl(photoIds[currentIndex]);
        counterElement.textContent = `${currentIndex + 1} / ${photoIds.length}`;
        
        // Fade in when image loads
        imageElement.onload = () => {
            imageElement.classList.add('visible');
        };
    }, 300);
}

// Navigation functions
function nextPhoto() {
    showPhoto(currentIndex + 1);
}

function previousPhoto() {
    showPhoto(currentIndex - 1);
}

// Auto-play functions
function startAutoPlay() {
    if (photoIds.length <= 1) return; // Don't auto-play if only one photo
    
    isPlaying = true;
    playPauseBtn.textContent = '⏸ Pause';
    autoPlayInterval = setInterval(nextPhoto, SLIDE_DURATION);
}

function stopAutoPlay() {
    isPlaying = false;
    playPauseBtn.textContent = '▶ Play';
    clearInterval(autoPlayInterval);
}

function toggleAutoPlay() {
    if (isPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

// Event listeners
playPauseBtn.addEventListener('click', toggleAutoPlay);
prevBtn.addEventListener('click', () => {
    previousPhoto();
    if (isPlaying) {
        stopAutoPlay();
        startAutoPlay(); // Restart timer
    }
});
nextBtn.addEventListener('click', () => {
    nextPhoto();
    if (isPlaying) {
        stopAutoPlay();
        startAutoPlay(); // Restart timer
    }
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousPhoto();
    } else if (e.key === 'ArrowRight') {
        nextPhoto();
    } else if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
    }
});

// Touch/swipe support for Portal
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next photo
            nextPhoto();
        } else {
            // Swipe right - previous photo
            previousPhoto();
        }
        
        if (isPlaying) {
            stopAutoPlay();
            startAutoPlay(); // Restart timer
        }
    }
}

// Initialize slideshow
function init() {
    if (photoIds.length === 0) {
        counterElement.textContent = 'Add photo IDs to slideshow.js';
        console.warn('No photos added! Edit slideshow.js and add your Cloudinary photo public IDs to the photoIds array.');
        return;
    }
    
    showPhoto(0);
    startAutoPlay();
    
    console.log(`Slideshow initialized with ${photoIds.length} photos`);
}

// Start when page loads
window.addEventListener('load', init);