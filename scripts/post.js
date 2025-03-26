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
/** 
// Star icon and rating logic
let currentRating = 0; 

// Function to set the rating visually based on the clicked star
function setRating(rating) {
    currentRating = rating;
    
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('star' + i);
        star.classList.remove('selected'); 
    }
    for (let i = 1; i <= rating; i++) {
        const star = document.getElementById('star' + i);
        star.classList.add('selected'); 
    }
}

// Function to get the current rating from the stars
function getRating() {
    
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(`star${i}`).classList.contains('selected')) {
            return i;
        }
    }
    return null; 
}

// Handle the form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('review-form'); 
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const clubName = document.getElementById('exampleFormControlInput1').value;
        const rating = getRating(); 
        const reviewText = document.getElementById('exampleFormControlTextarea1').value;

        if (!clubName || !rating || !reviewText) {
            alert("Please complete all fields.");
            return;
        }

        const reviewData = {
            clubName: clubName,
            rating: rating,
            reviewText: reviewText
        };

        console.log('Review submitted:', reviewData);

        const reviewFeed = document.getElementById('review-feed');
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h4>${clubName} - ${rating} Stars</h4>
            <p>${reviewText}</p>
        `;
        reviewFeed.appendChild(reviewElement);

        form.reset();

        for (let i = 1; i <= 5; i++) {
            const star = document.getElementById('star' + i);
            star.classList.remove('selected');
        }
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('review-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect the form data
        const clubName = document.getElementById('exampleFormControlInput1').value;
        const rating = getRating(); // Get the selected rating (1 to 5)
        const reviewText = document.getElementById('exampleFormControlTextarea1').value;

        // Validate the data (optional but recommended)
        if (!clubName || !rating || !reviewText) {
            alert("Please complete all fields.");
            return;
        }

        // Create the review object (you could send this to the server)
        const reviewData = {
            clubName: clubName,
            rating: rating,
            reviewText: reviewText
        };

        // Create the review element to be appended to the review feed
        const reviewFeed = document.getElementById('review-feed');
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-item');

        // Create the star rating HTML (as icons)
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            // If the star index is less than or equal to the rating, mark it as selected
            starsHTML += `<span class="material-icons star ${i <= rating ? 'selected' : ''}">star</span>`;
        }

        // Insert review content (including the stars)
        reviewElement.innerHTML = `
            <h5>${clubName} - ${starsHTML}</h5>
            <p>${reviewText}</p>
        `;

        // Append the review to the feed
        reviewFeed.appendChild(reviewElement);

        // Optionally, reset the form after submission
        form.reset();
        resetStars(); // Reset the stars to default after submitting the form
    });
});

// Function to get the selected rating
function getRating() {
    // Loop through the stars and find the one with the 'selected' class
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(`star${i}`).classList.contains('selected')) {
            return i;
        }
    }
    return null; // Return null if no star is selected
}

// Reset the stars after review submission
function resetStars() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`star${i}`).classList.remove('selected');
    }
}

// Set rating when a star is clicked
function setRating(rating) {
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('star' + i);
        if (i <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    }
}

