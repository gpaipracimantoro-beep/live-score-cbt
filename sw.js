// ==========================================
// SERVICE WORKER - Live CBT Monitor MAPSI 2026
// ==========================================
const CACHE_NAME = 'mapsi-cbt-monitor-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install: cache aset statis
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .catch((err) => console.warn('Cache install gagal:', err))
  );
  self.skipWaiting();
});

// Activate: hapus cache lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: strategi cache-first untuk aset lokal, bypass untuk GAS
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // JANGAN cache request ke Google Apps Script — data harus selalu fresh
  if (
    url.hostname.includes('script.google.com') ||
    url.hostname.includes('script.googleusercontent.com') ||
    url.hostname.includes('googleusercontent.com') ||
    url.hostname.includes('qrserver.com')
  ) {
    return; // biarkan browser handle langsung
  }

  // Cache-first untuk aset lokal
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // Hanya cache respons OK dari origin yang sama
        if (
          response &&
          response.status === 200 &&
          event.request.method === 'GET' &&
          url.origin === self.location.origin
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Fallback jika offline dan request bukan dari cache
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});