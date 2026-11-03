// Konfigurasi Cloud Database Firebase Firestore
const firebaseConfig = {
  apiKey: "AIzaSyA9uBRzNtpWpLgVVj45eXJH0blx43t0nnY",
  authDomain: "reminder-app-7e3fe.firebaseapp.com",
  projectId: "reminder-app-7e3fe",
  storageBucket: "reminder-app-7e3fe.firebasestorage.app",
  messagingSenderId: "204760907640",
  appId: "1:204760907640:web:fee8a32281b9231c59128d",
  measurementId: "G-P7HBEL0Y9G"
};

function isFirebaseConfigured() {
  return Boolean(
    typeof firebaseConfig !== 'undefined' &&
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("PASTE_") &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.includes("PASTE_")
  );
}

window.firebaseConfig = firebaseConfig;
window.isFirebaseConfigured = isFirebaseConfigured;
