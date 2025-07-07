if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('SW registered!', reg))
    .catch(err => console.log('SW failed', err));
}
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.createElement('button');
  installBtn.textContent = 'Install App';
  installBtn.style.position = 'fixed';
  installBtn.style.bottom = '20px';
  installBtn.style.right = '20px';
  installBtn.style.padding = '10px';
  installBtn.style.zIndex = '9999';
  document.body.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();
  });
});
