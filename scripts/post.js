let bigImageIndex = 0;
const bigImages = document.querySelectorAll('.big-image-container img');

function changeBigImage() {
    bigImages[bigImageIndex].classList.remove('active');
    bigImageIndex = (bigImageIndex + 1) % bigImages.length;
    bigImages[bigImageIndex].classList.add('active');
}

setInterval(changeBigImage, 10000); // Change big image every 10 seconds

// Carousel Logic
const carouselInner = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.carousel-inner .card');
let carouselIndex = 0;

function updateCarousel() {
    const offset = -carouselIndex * (cards[0].offsetWidth + 20); // 20px gap
    carouselInner.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    if (carouselIndex < cards.length - 1) {
        carouselIndex++;
    } else {
        carouselIndex = 0; // Loop back to the first card
    }
    updateCarousel();
}

function prevSlide() {
    if (carouselIndex > 0) {
        carouselIndex--;
    } else {
        carouselIndex = cards.length - 1; // Loop back to the last card
    }
    updateCarousel();
}
