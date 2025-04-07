// code start for slider 
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

// Clone the first and last slides for infinite looping
const firstSlide = slides.firstElementChild.cloneNode(true);
const lastSlide = slides.lastElementChild.cloneNode(true);
slides.appendChild(firstSlide); // Add clone of first slide at the end
slides.insertBefore(lastSlide, slides.firstElementChild); // Add clone of last slide at the beginning

// Adjust the initial position to show the first actual slide
slides.style.transform = `translateX(${-100}%)`;

function showSlide(index) {
    if (index < 0) {
        // If going before the first slide, jump to the last actual slide
        currentSlide = totalSlides - 1;
        slides.style.transition = 'none'; // Disable transition for instant jump
        slides.style.transform = `translateX(${-(totalSlides + 1) * 100}%)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            slides.style.transform = `translateX(${-(totalSlides) * 100}%)`;
        }, 0);
    } else if (index >= totalSlides) {
        // If going after the last slide, jump to the first actual slide
        currentSlide = 0;
        slides.style.transition = 'none'; // Disable transition for instant jump
        slides.style.transform = `translateX(0%)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            slides.style.transform = `translateX(${-100}%)`;
        }, 0);
    } else {
        currentSlide = index;
        slides.style.transform = `translateX(${-(currentSlide + 1) * 100}%)`;
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Auto-slide functionality
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto-slide by default
startAutoSlide();

// Pause auto-slide on hover
// const slider = document.querySelector('.slider');
// slider.addEventListener('mouseenter', stopAutoSlide);
// slider.addEventListener('mouseleave', startAutoSlide);
// code end for slider


// code start for open photo

const imageList = [
    'image/wedding.jpg',
    'image/wedding1.jpg',
    'image/wedding2.jpg',
    'image/wedding3.jpg',
    'image/wedding4.jpg',
    'image/wedding5.jpg'
    // Add more image paths as needed
];
let currentImageIndex = 0;
function openModal(index) {
    currentImageIndex = index;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalImage').src = imageList[currentImageIndex];
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
function changeImage(n) {
    currentImageIndex += n;
    
    // Wrap around if at beginning/end
    if (currentImageIndex >= imageList.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = imageList.length - 1;
    }
    
    document.getElementById('modalImage').src = imageList[currentImageIndex];
}
// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}


// code start for navbar open and close
const toggleButton = document.getElementById('nav-toggle');
   const toolbar1 = document.getElementById('toolbar1');
   
   toggleButton.addEventListener('click', () => {
       toolbar1.classList.toggle('active')
   })
// code end for navbar open and close



