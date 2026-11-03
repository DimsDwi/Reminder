// Konfigurasi Firebase Firestore
// Dapatkan konfigurasi ini secara gratis di https://console.firebase.google.com/
// 1. Buat project baru di Firebase Console
// 2. Tambahkan Web App (ikon </>) lalu copy firebaseConfig ke sini
// 3. Masuk ke menu Firestore Database -> Create database -> Start in test mode

const firebaseConfig = {
  apiKey: "PASTE_API_KEY_DISINI",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Cek apakah konfigurasi sudah diisi oleh pengguna
function isFirebaseConfigured() {
  return (
    typeof firebaseConfig !== 'undefined' &&
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("PASTE_") &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.includes("PASTE_")
  );
}

window.firebaseConfig = firebaseConfig;
window.isFirebaseConfigured = isFirebaseConfigured;
