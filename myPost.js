// // document.addEventListener('DOMContentLoaded', () => {
// //     const postTitle = localStorage.getItem('postTitle');
// //     const postDescription = localStorage.getItem('postDescription');
// //     const imageSrc = localStorage.getItem('imageSrc'); 

// //     let picture = document.querySelector('.picture');
// //     let title = document.querySelector('.title');
// //     let description = document.querySelector('.tarea');

   
// //     title.innerHTML = `<span>Title:</span> ${postTitle}`;
// //     description.innerHTML = `<span>Description: <br></span> ${postDescription}`;

// //     if (imageSrc) {
// //         const imageElement = document.createElement('img');
// //         imageElement.src = imageSrc;
// //         imageElement.alt = postTitle;
// //         imageElement.style.width = '35vw';  
// //         imageElement.style.height = '40vh';
// //         picture.appendChild(imageElement);
// //     }


// //     let homeBtn = document.querySelector('.home');
// //     let deleteBtn = document.querySelector('.del');

// //     homeBtn.addEventListener('click', () => {
// //         window.location.href = 'blog.html';
// //     });

// //     deleteBtn.addEventListener('click', () => {
// //         title.innerHTML = '';
// //         description.innerHTML = '';
// //         picture.innerHTML = '';
        
// //         localStorage.clear(); 
// //     });
// // });


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyA9kK6Q18buHoA7ooisB5ffe_2qsJOp01Q",
//     authDomain: "web-development-e83c1.firebaseapp.com",
//     projectId: "web-development-e83c1",
//     storageBucket: "web-development-e83c1.appspot.com",
//     messagingSenderId: "632337746846",
//     appId: "1:632337746846:web:7a2952ab55504355f3648f",
//     measurementId: "G-0FSBQZ05MM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// document.addEventListener('DOMContentLoaded', () => {
//     // Retrieve and display data from localStorage
//     const postTitle = localStorage.getItem('postTitle');
//     const postDescription = localStorage.getItem('postDescription');
//     const imageSrc = localStorage.getItem('imageSrc');

//     let picture = document.querySelector('.picture');
//     let title = document.querySelector('.title');
//     let description = document.querySelector('.tarea');

//     title.innerHTML = `<span>Title:</span> ${postTitle}`;
//     description.innerHTML = `<span>Description: <br></span> ${postDescription}`;

//     if (imageSrc) {
//         const imageElement = document.createElement('img');
//         imageElement.src = imageSrc;
//         imageElement.alt = postTitle;
//         imageElement.style.width = '35vw';
//         imageElement.style.height = '40vh';
//         picture.appendChild(imageElement);
//     }

//     // Handle home and delete button functionality
//     let homeBtn = document.querySelector('.home');
//     let deleteBtn = document.querySelector('.del');

//     homeBtn.addEventListener('click', () => {
//         window.location.href = 'blog.html';
//     });

//     deleteBtn.addEventListener('click', () => {
//         title.innerHTML = '';
//         description.innerHTML = '';
//         picture.innerHTML = '';

//         localStorage.clear();
//     });

//     // Handle file upload to Firebase Storage
//     const fileInput = document.getElementById('file');
//     fileInput.addEventListener('change', (e) => {
//         const image = document.getElementById('image');
//         image.src = URL.createObjectURL(e.target.files[0]);
//     });

//     const uploadBtn = document.getElementById('uploadBtn');
//     uploadBtn.addEventListener('click', async () => {
//         const file = fileInput.files[0];
//         if (file) {
//             try {
//                 const URL = await uploadToStorage(file);
//                 console.log('url ===========>', URL);

//                 // Optionally, store the URL in localStorage and display it
//                 localStorage.setItem('imageSrc', URL);
//                 const imageElement = document.createElement('img');
//                 imageElement.src = URL;
//                 imageElement.alt = postTitle;
//                 imageElement.style.width = '35vw';
//                 imageElement.style.height = '40vh';
//                 picture.innerHTML = ''; // Clear the old image
//                 picture.appendChild(imageElement);
//             } catch (error) {
//                 console.error('Error uploading file:', error);
//             }
//         }
//     });
// });

// // Upload function to Firebase Storage
// const uploadToStorage = (file) => {
//     return new Promise((resolve, reject) => {
//         const fileName = file.name;
//         const storageRef = ref(storage, `users/${fileName.slice(fileName.lastIndexOf("."))}`);
//         const uploadTask = uploadBytesResumable(storageRef, file);

//         uploadTask.on('state_changed',
//             (snapshot) => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//                 switch (snapshot.state) {
//                     case 'paused':
//                         console.log('Upload is paused');
//                         break;
//                     case 'running':
//                         console.log('Upload is running');
//                         break;
//                 }
//             },
//             (error) => {
//                 reject(error);
//             },
//             () => {
//                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                     resolve(downloadURL);
//                 });
//             }
//         );
//     });
// };


document.addEventListener('DOMContentLoaded', () => {
    const postTitle = localStorage.getItem('postTitle');
    const postDescription = localStorage.getItem('postDescription');
    const imageSrc = localStorage.getItem('imageSrc');
    const uploadedUrl = localStorage.getItem('uploadedUrl');

    let picture = document.querySelector('.picture');
    let title = document.querySelector('.title');
    let description = document.querySelector('.tarea');
    let urlDisplay = document.querySelector('.url-display');

    title.innerHTML = `<span>Title:</span> ${postTitle}`;
    description.innerHTML = `<span>Description: <br></span> ${postDescription}`;

    if (imageSrc) {
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.alt = postTitle;
        imageElement.style.width = '35vw';
        imageElement.style.height = '40vh';
        picture.appendChild(imageElement);
    }

    if (uploadedUrl) {
        urlDisplay.innerHTML = `<a href="${uploadedUrl}" target="_blank">View Uploaded Image</a>`;
    }

    let homeBtn = document.querySelector('.home');
    let deleteBtn = document.querySelector('.del');

    homeBtn.addEventListener('click', () => {
        window.location.href = 'blog.html';
    });

    deleteBtn.addEventListener('click', () => {
        title.innerHTML = '';
        description.innerHTML = '';
        picture.innerHTML = '';
        urlDisplay.innerHTML = '';
        localStorage.clear();
    });

    const fileInput = document.getElementById('file');
    fileInput.addEventListener('change', (e) => {
        const image = document.getElementById('image');
        image.src = URL.createObjectURL(e.target.files[0]);
    });

    const uploadBtn = document.getElementById('uploadBtn');
    uploadBtn.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            try {
                const URL = await uploadToStorage(file);
                console.log('url ===========>', URL);

               
                localStorage.setItem('uploadedUrl', URL);
                urlDisplay.innerHTML = `<a href="${URL}" target="_blank">View Uploaded Image</a>`;
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    });
});

const uploadToStorage = (file) => {
    return new Promise((resolve, reject) => {
        const fileName = file.name;
        const storageRef = ref(storage, `users/${fileName.slice(fileName.lastIndexOf("."))}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
};
