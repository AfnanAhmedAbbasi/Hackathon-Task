import { app, auth } from "./fireBase.mjs"; // Corrected import statement
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const loginBtn = document.getElementById('signIn');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        window.location.href = 'createPost.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
    });
});

const createAccBtn = document.getElementById('signUp');
createAccBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = 'signUp.html';
});
