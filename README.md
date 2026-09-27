\# 📊 Live CBT PAI \& BTQ Monitor — MAPSI 2026



PWA untuk memantau \*\*peringkat real-time\*\* hasil CBT (Computer Based Test) PAI \& BTQ

pada ajang MAPSI Ke-26 Kecamatan Pracimantoro 2026.



\## 🎯 Fitur



\- ✅ Split view \*\*PA (Putra)\*\* dan \*\*PI (Putri)\*\*

\- ✅ Podium visual Top 3 dengan medali 🥇🥈🥉

\- ✅ Progress bar global "X dari Y peserta sudah submit CBT"

\- ✅ Indikator "✅ SEMUA SELESAI" saat 100% peserta submit

\- ✅ Auto-refresh setiap \*\*5 detik\*\*

\- ✅ Bisa di-install sebagai PWA (Add to Home Screen)

\- ✅ Mode offline-ready (aset di-cache Service Worker)



\## 🚀 Cara Deploy



1\. Buat repository GitHub baru (misal: `cbt-monitor`).

2\. Upload 4 file: `index.html`, `manifest.json`, `sw.js`, `README.md`.

3\. Buka \*\*Settings → Pages\*\*.

4\. Source: \*\*Deploy from a branch\*\* → Branch: \*\*main\*\* → Folder: \*\*/ (root)\*\*.

5\. Klik \*\*Save\*\*.

6\. Tunggu 1-2 menit → akses `https://<username>.github.io/cbt-monitor/`.



\## ⚙️ Konfigurasi



Saat pertama kali dibuka, isi:



| Field | Nilai |

|-------|-------|

| \*\*URL Web App GAS\*\* | URL deployment SIAP MAPSI (berakhiran `/exec`) |

| \*\*ID Spreadsheet G-Form\*\* | ID spreadsheet respons G-Form CBT (dari URL) |



Klik \*\*Mulai Pemantauan\*\* → konfigurasi otomatis disimpan di `localStorage`.



\## 📄 Lisensi



SIAP MAPSI 2026 © KKG PAI Pracimantoro

