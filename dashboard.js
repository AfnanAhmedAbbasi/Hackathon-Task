// import { auth } from "./fireBase.mjs";
// import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in
//         window.location.href = 'dashboard.html';
//     } else {
//         // User is signed out
//         window.location.href = 'signUp.html';
//     }
// });


// const logout = document.getElementById('logout');
// logout.addEventListener('click', () => {
//     signOut(auth).then(() => {
//         // Sign-out successful
//         window.location.href = 'signUp.html';
//     }).catch((error) => {
//         // Handle errors here
//         console.error('Sign-out error:', error.message);
//     });
// });

// let post =document.getElementById('post')
// post.addEventListener('click',()=>{
//     window.location.href='signUp.html'
// })


let post =document.getElementById('post')
post.addEventListener('click',()=>{
    window.location.href='signUp.html'
})