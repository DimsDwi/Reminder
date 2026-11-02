# Ingat — Aplikasi Pengingat Harian (Daily Reminder)

Aplikasi pencatat pengingat harian sederhana, elegan, dan ringan berbasis web. Seluruh data disimpan secara lokal pada browser pengguna (`localStorage`) dan mendukung fitur notifikasi peramban.

---

## 🚀 Fitur Utama
- **Tambah, Ubah & Hapus Pengingat**: Catat nama kegiatan, tanggal, waktu, dan kategori.
- **Penyimpanan Lokal (Offline-friendly)**: Data tersimpan otomatis di perangkat (`localStorage`).
- **Filter Pengingat**: Tampilan Semua, Hari ini, Mendatang, dan Selesai.
- **Notifikasi Browser**: Peringatan waktu pengingat saat aplikasi terbuka.
- **Responsif**: Nyaman digunakan di tampilan ponsel (mobile) maupun desktop.

---

## 📁 Struktur Folder
```text
Reminder/
├── index.html          # File utama (entry point Vercel)
├── reminder-app.html   # Salinan / berkas alternatif
├── vercel.json         # Konfigurasi routing & rewrite Vercel
├── .gitignore          # Daftar file yang diabaikan git
└── README.md           # Dokumentasi proyek
```

---

## 🌐 Cara Deploy ke Vercel

### Opsi 1: Lewat Dashboard Vercel (Rekomendasi)
1. Pastikan perubahan ini sudah di-*push* ke repositori GitHub:
   ```bash
   git add .
   git commit -m "Siapkan struktur untuk deploy ke Vercel"
   git push origin main
   ```
2. Buka [vercel.com](https://vercel.com/) dan login menggunakan akun GitHub.
3. Klik tombol **"Add New..."** lalu pilih **"Project"**.
4. Pilih repositori **`Reminder`** (`DimsDwi/Reminder`) lalu klik **"Import"**.
5. Pada konfigurasi project:
   - **Framework Preset**: Pilih `Other`
   - **Root Directory**: `./` (biarkan default)
   - **Build and Output Settings**: Kosongkan (karena ini web statis HTML)
6. Klik **"Deploy"**. Selesai! Web Anda akan langsung aktif dengan URL `https://reminder-xxxx.vercel.app`.

### Opsi 2: Lewat Vercel CLI
Jalankan perintah berikut di terminal:
```bash
npx vercel
```
Ikuti petunjuk di terminal untuk menghubungkan dan langsung mendeploy. Untuk deployment production:
```bash
npx vercel --prod
```

---

## 💻 Cara Menjalankan Lokal
Cukup buka file `index.html` langsung di browser favorit Anda, atau jalankan server lokal seperti Live Server di VS Code atau:
```bash
npx serve .
```
