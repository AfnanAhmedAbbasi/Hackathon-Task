import { app, auth } from "./fireBase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const createAccBtn = document.getElementById('submit');
const loginBtn = document.getElementById('signIn');

createAccBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Redirect to the createPost page
        window.location.href = 'createPost.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'signIn.html';
});
