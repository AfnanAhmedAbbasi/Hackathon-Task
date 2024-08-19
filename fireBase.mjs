import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyA9kK6Q18buHoA7ooisB5ffe_2qsJOp01Q",
  authDomain: "web-development-e83c1.firebaseapp.com",
  projectId: "web-development-e83c1",
  storageBucket: "web-development-e83c1.appspot.com",
  messagingSenderId: "632337746846",
  appId: "1:632337746846:web:7a2952ab55504355f3648f",
  measurementId: "G-0FSBQZ05MM"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);