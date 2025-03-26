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


// Call the function to display the initial content
function insertNameFromFirestore() {
    // Check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // Let's know who the logged-in user is by logging their UID
            currentUser = db.collection("users").doc(user.uid); // Go to the Firestore document of the user
            currentUser.get().then(userDoc => {
                // Get the user name
                let userName = userDoc.data().name;
                console.log(userName);
                //$("#name-goes-here").text(userName); // jQuery
                document.getElementById("name-goes-here").innerText = userName;
            })
        } else {
            console.log("No user is logged in."); // Log a message when no user is logged in
        }
    })
}
insertNameFromFirestore(); // Call the function to display the user name
updateContent(); // Call the function to display the initial content