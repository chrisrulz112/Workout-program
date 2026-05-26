const CACHE = 'training-v26';
const ASSETS = ['./', './index.html', './manifest.json', './sw.js'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

// ─── Rest timer notifications ───
let notifTimer = null;

self.addEventListener('message', e => {
  if (e.data.type === 'SCHEDULE_NOTIFICATION') {
    // Clear any existing scheduled notification
    if (notifTimer) { clearTimeout(notifTimer); notifTimer = null; }
    const delay = e.data.endTime - Date.now();
    if (delay <= 0) return;
    notifTimer = setTimeout(() => {
      self.registration.showNotification('Rest complete', {
        body: e.data.label ? `Up next: ${e.data.label}` : 'Time to go.',
        icon: './icon-192.png',
        badge: './icon-192.png',
        silent: false,
        tag: 'rest-timer',
        renotify: true,
      });
      notifTimer = null;
    }, delay);
  }

  if (e.data.type === 'CANCEL_NOTIFICATION') {
    if (notifTimer) { clearTimeout(notifTimer); notifTimer = null; }
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      if (list.length > 0) return list[0].focus();
      return clients.openWindow('./');
    })
  );
});
