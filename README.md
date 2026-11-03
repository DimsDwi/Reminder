# Ingat — Aplikasi Pengingat Harian (Daily Reminder)

Aplikasi pencatat pengingat harian sederhana, elegan, dan responsif berbasis web. Mendukung **Cloud Database Real-time (Firebase Firestore)** sehingga jadwal otomatis tersinkronisasi di komputer, laptop, dan HP mana saja, serta tetap memiliki fallback penyimpanan lokal (`localStorage`).

---

## 🚀 Fitur Utama
- **Cloud Database Real-Time**: Sinkronisasi jadwal otomatis antar perangkat via Firebase Firestore. Perubahan di satu komputer langsung muncul di komputer lain tanpa refresh.
- **Mode Offline / Lokal**: Tetap dapat digunakan walau tanpa internet atau belum menghubungkan Firebase (`localStorage`).
- **Indikator Status Database**: Status koneksi langsung terlihat di bagian atas (Cloud Database Aktif / Mode Lokal).
- **Notifikasi Browser**: Peringatan waktu pengingat saat aplikasi terbuka.
- **Filter & Statistik**: Semua, Hari ini, Mendatang, dan Selesai.
- **Responsif**: Tampilan optimal untuk mobile dan desktop.

---

## 📁 Struktur Folder
```text
Reminder/
├── index.html          # File utama (entry point Vercel)
├── reminder-app.html   # Berkas alternatif / salinan
├── firebase-config.js  # Konfigurasi Cloud Database Firebase
├── vercel.json         # Konfigurasi routing & rewrite Vercel
├── .gitignore          # File yang diabaikan git
└── README.md           # Dokumentasi proyek
```

---

## ☁️ Menghubungkan Cloud Database (Firebase)
Agar jadwal tidak hilang saat dibuka di komputer lain, cukup ikuti langkah gratis berikut:

1. Buka [console.firebase.google.com](https://console.firebase.google.com/) dan login dengan akun Google.
2. Klik **Add project** (contoh nama: `reminder-app`).
3. Pada menu sebelah kiri:
   - Pilih **Build** > **Firestore Database**.
   - Klik **Create database**, pilih lokasi server (misal: `asia-southeast1`), lalu pilih **Start in test mode**.
4. Kembali ke halaman Project Overview, klik ikon Web (**`</>`**) untuk mendaftarkan web app.
5. Salin objek `firebaseConfig` yang muncul, lalu tempelkan di file `firebase-config.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "reminder-app.firebaseapp.com",
     projectId: "reminder-app",
     storageBucket: "reminder-app.appspot.com",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
   *(Atau bisa juga langsung klik tombol **Pengaturan Database** di pojok kanan atas aplikasi web).*

---

## 🌐 Deploy ke Vercel

### Lewat GitHub (Otomatis)
1. Push pembaruan ke GitHub:
   ```bash
   git add .
   git commit -m "Integrasi Cloud Database Firebase Firestore"
   git push origin main
   ```
2. Vercel akan otomatis melakukan build dan redeploy ke domain Anda!
