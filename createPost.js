// import { app } from "./fireBase.mjs";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

// const storage = getStorage(app); // Pass the app instance here

// // Ensure that all required elements are properly selected
// let titleInput = document.getElementById('title-input');
// let textArea = document.getElementById('tarea');
// let fileInput = document.getElementById('file');
// let createBtn = document.getElementById('createButton');

// createBtn.addEventListener('click', async () => {
//     console.log("Create button clicked!");
//     localStorage.setItem('postTitle', titleInput.value.trim());
//     localStorage.setItem('postDescription', textArea.value.trim());

//     const file = fileInput.files[0];
//     if (file) {
//         const storageRef = ref(storage, `images/${file.name}`);
//         try {
//             await uploadBytes(storageRef, file);
//             const downloadURL = await getDownloadURL(storageRef);
//             localStorage.setItem('imageSrc', downloadURL);
//             window.location.href = 'blog.html';
//         } catch (error) {
//             console.error("Error uploading file: ", error);
//         }
//     } else {
//         console.log("No file selected!");
//         window.location.href = 'blog.html';
//     }
// });



import { app } from "./fireBase.mjs";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const storage = getStorage(app);

let titleInput = document.getElementById('title-input');
let textArea = document.getElementById('tarea');
let fileInput = document.getElementById('file');
let createBtn = document.getElementById('createButton');
let fileNameSpan = document.getElementById('file-name');

function checkForm() {
    if (titleInput.value.trim() !== '' && textArea.value.trim() !== '' && fileInput.files.length > 0) {
        createBtn.classList.remove('spc');
        createBtn.classList.add('createButton');
        createBtn.disabled = false;
    } else {
        createBtn.classList.remove('createButton');
        createBtn.classList.add('spc');
        createBtn.disabled = true;
    }
}

titleInput.addEventListener('input', checkForm);
textArea.addEventListener('input', checkForm);
fileInput.addEventListener('change', () => {
    fileNameSpan.textContent = fileInput.files[0] ? fileInput.files[0].name : '';
    checkForm();
});

createBtn.addEventListener('click', async () => {
    console.log("Create button clicked!");
    localStorage.setItem('postTitle', titleInput.value.trim());
    localStorage.setItem('postDescription', textArea.value.trim());

    const file = fileInput.files[0];
    if (file) {
        const storageRef = ref(storage, `images/${file.name}`);
        try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            localStorage.setItem('imageSrc', downloadURL);
            window.location.href = 'blog.html';
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    } else {
        console.log("No file selected!");
        window.location.href = 'blog.html';
    }
});

// Initial check to disable the button if the form is not filled
checkForm();

