var currentUser;

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global
            console.log(currentUser);

            insertNameFromFirestore(user);
            getBookmarks(user);
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "FireBaselogin.html";
        }
    });
}
doAll();



// Select all necessary elements
const images = document.querySelectorAll(".image-section img");
const textTitle = document.getElementById("text-title");
const textDescription = document.getElementById("text-description");

// Array holding titles and descriptions for each image
const data = [
    {
        title: "Girl Code Club", 
        description: "Are you passionate about coding, tech, and building a supportive community? The Girl Code Club is looking for new members! Whether you're a seasoned programmer or just starting your coding journey, this is the perfect space to learn, collaborate, and grow together."
        
    },
    {
        title: "After School Debate Club",
        description: "Do you love discussing big ideas, analyzing different perspectives, and sharpening your public speaking skills? The After-School Debate Club is looking for passionate thinkers like YOU! Whether you’re an experienced debater or brand new to the art of argument, this is the perfect space to refine your skills, engage in thought-provoking discussions, and build confidence."
    },
    {
        title: "Chess Club",
        description: "Are you a chess enthusiast or looking to learn the game? Join the Chess Club! Whether you're a beginner or a seasoned player, this is the perfect place to sharpen your skills, strategize with fellow players, and enjoy friendly competition."        
    },
    {
        title: "Anime Club",
        description: "Are you a fan of anime and manga? Join the Anime Club! Whether you're a seasoned otaku or just starting your journey into the world of anime, this is the perfect place to connect with fellow fans, discuss your favorite series, and explore new titles."
    },
    {
        title: "Dance Club",
        description: "Experience the Ultimate Dance Club! Step into a world of music, movement, and unforgettable nights! Whether you're a seasoned dancer or just looking to let loose, our dance club is the perfect place to connect, express yourself, and feel the beat. With electrifying music, themed dance nights, and a vibrant, welcoming atmosphere, you'll always find a reason to hit the floor."
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
// insertNameFromFirestore(); // Call the function to display the user name
updateContent(); // Call the function to display the initial content





//isabel



function insertNameFromFirestore(user) {
    db.collection("users").doc(user.uid).get().then(userDoc => {
        console.log(userDoc.data().name)
        userName = userDoc.data().name;
        console.log(userName)
        document.getElementById("name-goes-here").innerHTML = userName;
    })

}


//----------------------------------------------------------
// This function takes input param User's Firestore document pointer
// and retrieves the "saved" array (of bookmarks) 
// and dynamically displays them in the gallery
//----------------------------------------------------------
function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {

					  // Get the Array of bookmarks
            var bookmarks = userDoc.data().bookmarks;
            console.log(bookmarks);
						
						// Get pointer the new card template
            let newcardTemplate = document.getElementById("savedCardTemplate");

						// Iterate through the ARRAY of bookmarked hikes (document ID's)
            bookmarks.forEach(thisClubsID => {
                console.log(thisClubsID);
                db.collection("clubs").doc(thisClubsID).get().then(doc => {
                    // var title = doc.data().name; // get value of the "name" key
                    // var hikeCode = doc.data().code; //get unique ID to each hike to be used for fetching right image
                    // var hikeLength = doc.data().length; //gets the length field
                    // var docID = doc.id;  //this is the autogenerated ID of the document
                    
                    //clone the new card

                    let data = doc.data();
                    let newcard = newcardTemplate.content.cloneNode(true);

                    //update title and some pertinant information
                    newcard.querySelector(".card-name").innerHTML = data.name;
                    newcard.querySelector(".card-email").innerHTML = data.email;
                    newcard.querySelector(".card-text").innerHTML = data.details;
                    newcard.querySelector(".card-img-top").src = `/images/club/${data.code}.png`;
            
                    
                    clubsCardGroup.appendChild(newcard);
                })
            });
        })
}


