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


// Function to load reviews from localStorage and display them
function loadReviews() {
    const reviewFeed = document.getElementById('review-feed');
    
    // Get reviews from localStorage (if any)
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Clear existing reviews and re-display all saved reviews
    reviewFeed.innerHTML = '<h3>Recent Reviews</h3>';  // Title for the reviews section
    
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-item');
        
        // Create the star rating HTML (as icons)
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<span class="material-icons star ${i <= review.rating ? 'selected' : ''}">star</span>`;
        }

        // Insert review content (including the stars) and "X" for deletion at the end
        reviewElement.innerHTML = `
            <h5>${review.clubName} - ${starsHTML}</h5>
            <p>${review.reviewText}</p>
            <span class="delete-x" data-index="${index}">&times;</span> <!-- "X" symbol at the end -->
        `;

        // Append the review to the feed
        reviewFeed.appendChild(reviewElement);
    });

    // Attach event listeners to "X" (delete) elements
    document.querySelectorAll('.delete-x').forEach(span => {
        span.addEventListener('click', function(event) {
            const indexToDelete = event.target.getAttribute('data-index');
            deleteReview(indexToDelete);
        });
    });
}

// Function to delete a review from localStorage and update the display
function deleteReview(index) {
    // Get reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Remove the review at the specified index
    reviews.splice(index, 1);

    // Save the updated reviews back to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Reload reviews to update the page
    loadReviews();
}

// Global variable to store the current rating
let currentRating = 0;

// Handle the form submission to add new review
document.addEventListener("DOMContentLoaded", function() {
    // Load reviews from localStorage when the page is loaded
    loadReviews();

    const form = document.getElementById('review-form');
    
    // Handle the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect the form data
        const clubName = document.getElementById('exampleFormControlInput1').value;
        const rating = currentRating;  // Use the stored rating
        const reviewText = document.getElementById('exampleFormControlTextarea1').value;

        // Validate the data (optional but recommended)
        if (!clubName || !rating || !reviewText) {
            alert("Please complete all fields.");
            return;
        }

        // Create the review object
        const reviewData = {
            clubName: clubName,
            rating: rating,
            reviewText: reviewText
        };

        // Retrieve reviews from localStorage (if any)
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Add the new review to the reviews array
        reviews.push(reviewData);

        // Save the updated reviews array back to localStorage
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Clear the form
        form.reset();
        resetStars(); // Reset the stars to default after submitting the form

        // Reload the reviews to include the new one
        loadReviews();
    });
});

// Function to reset the stars after review submission
function resetStars() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`star${i}`).textContent = 'star_outline';  // Reset all stars
    }
    currentRating = 0; 
}

// Function to set the current rating
function setRating(rating) {
    currentRating = rating;

    // Update the star icons based on the rating
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star${i}`);
        if (i <= rating) {
            star.textContent = 'star';  // Filled star
        } else {
            star.textContent = 'star_outline';  // Empty star
        }
    }
}

