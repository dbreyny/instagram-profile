const cacheName = 'instagram-clone-v8';

const assets = [
  '/',
  'index.html',
  'profile.jpg',
  'post1.jpg',
  'post3.jpg',
  'trading.jpg',
  'food1.jpg',
  'food2.jpg',
  'food3.jpg',
  'hobby1.jpg',
  'hobby2.jpg',
  'hobby3.jpg',
  'movie1.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
