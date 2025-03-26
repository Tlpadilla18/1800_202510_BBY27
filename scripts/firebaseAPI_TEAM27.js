// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaObyQ55gWGN05xLEyUR_evqVIXahk8wY",
    authDomain: "connectu-5312f.firebaseapp.com",
    projectId: "connectu-5312f",
    storageBucket: "connectu-5312f.firebasestorage.app",
    messagingSenderId: "737143617203",
    appId: "1:737143617203:web:e283460d9c255460da22c6"
};

// Initialize Firebase only once
if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded');
} else if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); // Initialize if not already done
} else {
    firebase.app(); // Use already initialized instance
}

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Make available globally
window.fbAuth = auth;
window.fbDb = db;
window.fbApp = firebase;

console.log('Firebase initialized:', !!firebase.apps.length);
