// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAmwSfGMEP-NcdNSl4b3a4d7hoZ7hn0GmY',
    authDomain: 'modern-notes.firebaseapp.com',
    projectId: 'modern-notes',
    storageBucket: 'modern-notes.appspot.com',
    messagingSenderId: '583827249616',
    appId: '1:583827249616:web:beabb991082f70b80101d5',
    measurementId: 'G-SV8CCB4L4H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
