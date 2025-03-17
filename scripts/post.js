// Select all necessary elements
const images = document.querySelectorAll(".image-section img");
const textTitle = document.getElementById("text-title");
const textDescription = document.getElementById("text-description");

// Array holding titles and descriptions for each image
const data = [
    {
        title: "Event 1",
        description: "This is the description for Event 1. Discover the excitement and enjoy the unique experience!"
    },
    {
        title: "Event 2",
        description: "This is the description for Event 2. Be part of something extraordinary and unforgettable!"
    },
    {
        title: "Event 3",
        description: "This is the description for Event 3. Explore the wonders and join the celebration!"
    },
    {
        title: "Event 4",
        description: "This is the description for Event 4. An event that combines excitement and fun!"
    },
    {
        title: "Event 5",
        description: "This is the description for Event 5. Experience the thrill and enjoy the moment!"
    }
];

let currentIndex = 0;

// Function to update the active image and text
function updateContent() {
    // Remove 'active' class from all images
    images.forEach((img) => img.classList.remove("active"));

    // Add 'active' class to the current image
    images[currentIndex].classList.add("active");

    // Update text content
    textTitle.textContent = data[currentIndex].title;
    textDescription.textContent = data[currentIndex].description;

    // Move to the next index, or loop back to the start
    currentIndex = (currentIndex + 1) % images.length;
}

// Automatically update content every 5 seconds
setInterval(updateContent, 5000);


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
