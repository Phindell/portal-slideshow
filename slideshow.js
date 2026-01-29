// Your Cloudinary configuration
const CLOUD_NAME = 'du8kevdcc';

// Add your photo public IDs here (the part after /upload/v######/)
// You can get these from your Cloudinary Media Library
const photoIds = [
    '2026-01-26_10-38-50_796_lkpuzm',
    '2026-01-25_19-02-58_319_mtdrox',
    '2026-01-22_12-10-34_144_exrbsl',
    '2026-01-17_18-02-42_996_kceo34',
    '2026-01-16_22-23-17_000_shwj7q',
    '2026-01-10_16-06-15_501_jpytiv',
    '2026-01-06_11-07-43_110_sctswe',
    '2026-01-03_20-42-08_000_2026-01-17T18_32_21.894_csxxwl',
    '2026-01-03_20-42-07_000_2026-01-17T18_32_25.080_imnghp',
    '2026-01-03_20-41-52_000_2026-01-17T18_32_25.331_q5lslw',
    '2026-01-02_12-55-12_000_vb9tfd',
    '2026-01-01_14-54-07_793_dbddzu',
    '2025-12-29_11-03-37_258_jwvokq',
    '2025-12-29_11-01-13_097_nimzzh',
    '2025-12-29_10-28-51_018_z7tn3r',
    '2025-12-27_18-16-40_162_m5ldfe',
    '2025-12-23_21-30-14_126_j0awpv',
    '2025-12-23_19-54-51_974_d5zgxb',
    '2025-12-23_19-18-16_283_unkd33',
    '2025-12-23_11-37-11_737_bwsekw',
    '2025-12-22_08-35-53_244_der20x',
    '2025-12-21_18-14-23_651_cn5rfc',
    '2025-12-21_17-59-04_033_tbgdvq',
    '2025-12-16_16-03-55_010_rkvfmp',
    '2025-12-16_13-45-39_103_bj7bue',
    '2025-12-06_15-05-27_808_iqfi66',
    '2025-12-06_15-05-27_808_iqfi66',
    '2025-12-06_14-09-43_903_meglzv',
    '2025-12-06_13-28-14_907_rgpgdl',
    '2025-12-04_11-49-28_212_fb3vfd',
    '2025-12-02_16-05-37_782_jvnwh1',
    '2025-11-30_09-46-11_136_qy2bal',
    '2025-11-30_09-30-23_249_z6mr0i',
    '2025-11-21_22-07-51_960_gsyini',
    '2025-11-21_21-36-47_252_cchact',
    '2025-11-14_15-26-17_920_vkzsp1',
    '2025-11-10_07-31-58_453_gtsezm',
    '2025-11-02_14-22-51_317_bz3tcl',
    '2025-10-31_21-49-18_631_lcdyz1',
    '2025-10-31_07-25-36_874_lbzni2',
    '2025-10-31_07-25-16_785_fwz91o',
    '2025-10-26_10-22-11_048_batrpa',
    '2025-10-23_20-48-36_384_stxbge',
    '2025-10-23_11-16-42_525_oxlopg',
    '2025-10-23_10-27-47_152_jrrs28',
    '2025-10-22_17-28-48_000_denlzm',
    '2025-10-17_14-36-35_828_n6kxtl',
    '2025-10-16_16-17-36_112_xoqvhp',
    '2025-10-15_15-13-48_532_mv07fr',
    '2025-10-14_08-39-41_303_k2feoe',
    '2025-09-29_11-13-11_715_s02uud'
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
