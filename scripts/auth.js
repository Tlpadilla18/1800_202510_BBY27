document.addEventListener('DOMContentLoaded', function () {
    if (typeof firebase === 'undefined' || !firebase.apps.length) {
        console.error('Firebase not loaded');
        document.getElementById('loader').textContent = 'Authentication service unavailable';
        return;
    }

    const auth = window.fbAuth || firebase.auth();
    const db = window.fbDb || firebase.firestore();

    console.log('Auth service:', auth);
    console.log('Firestore service:', db);

    try {
        const ui = new firebaseui.auth.AuthUI(auth);

        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult) {
                    handleAuthResult(authResult);
                    return false; // Prevent redirect after sign-in
                },
                uiShown: function () {
                    document.getElementById('loader').style.display = 'none';
                },
                signInFailure: function (error) {
                    console.error("Sign-in failed:", error);
                    document.getElementById('auth-error').classList.remove('d-none');
                    document.getElementById('auth-error').textContent = error.message || 'Failed to sign in. Please try again.';
                }
            },
            signInFlow: 'popup', // Popup flow (can change to 'redirect' if preferred)
            signInSuccessUrl: 'main.html',
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false,
                }
            ],
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            tosUrl: 'https://www.yourwebsite.com/terms-of-service',
            privacyPolicyUrl: 'https://www.yourwebsite.com/privacy-policy'
        };

        // Sign In Configuration
        const signInConfig = {
            ...uiConfig,
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    disableSignUp: {
                        status: true // Disable sign-up in the sign-in tab
                    }
                }
            ]
        };

        // Sign Up Configuration
        const signUpConfig = {
            ...uiConfig,
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    disableSignUp: {
                        status: false // Allow sign-up in the sign-up tab
                    }
                }
            ]
        };

        // Function to start FirebaseUI only when the relevant tab is shown
        function startFirebaseUIForTab(tabId, config) {
            ui.start(tabId, config);
        }

        // Initialize the UI when Sign-In tab is shown
        $('#signin-tab').on('shown.bs.tab', function () {
            startFirebaseUIForTab('#firebaseui-auth-container-signin', signInConfig);
        });

        // Initialize the UI when Sign-Up tab is shown
        $('#signup-tab').on('shown.bs.tab', function () {
            startFirebaseUIForTab('#firebaseui-auth-container-signup', signUpConfig);
        });

        // Initialize the correct UI container when the page loads
        if ($('#signin-tab').hasClass('active')) {
            startFirebaseUIForTab('#firebaseui-auth-container-signin', signInConfig);
        } else {
            startFirebaseUIForTab('#firebaseui-auth-container-signup', signUpConfig);
        }

        // Handle tab changes to reset the UI
        document.querySelectorAll('.nav-link').forEach(tab => {
            tab.addEventListener('click', function () {
                document.getElementById('auth-error').classList.add('d-none');
            });
        });

        // Password reset functionality
        document.getElementById('resetPassword').addEventListener('click', function (e) {
            e.preventDefault();
            const email = prompt('Please enter your email address:');
            if (email) {
                auth.sendPasswordResetEmail(email)
                    .then(() => {
                        alert('Password reset email sent. Please check your inbox.');
                    })
                    .catch(error => {
                        console.error('Password reset error:', error);
                        alert('Error sending password reset email: ' + error.message);
                    });
            }
        });

    } catch (e) {
        console.error('FirebaseUI init error:', e);
        document.getElementById('loader').innerHTML = `
            <div class="alert alert-danger">
                Error initializing authentication: ${e.message}
            </div>
        `;
    }

    async function handleAuthResult(authResult) {
        const user = authResult.user;
        try {
            if (authResult.additionalUserInfo.isNewUser) {
                await db.collection("users").doc(user.uid).set({
                    name: user.displayName || "New User",
                    email: user.email,
                    country: "Canada",
                    school: "BCIT",
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                });
            } else {
                await db.collection("users").doc(user.uid).update({
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
            window.location.assign('main.html');
        } catch (error) {
            console.error("Profile update error:", error);
            window.location.assign('main.html'); // Redirect even on error
        }
    }
});


