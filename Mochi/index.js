// Mochi - PWA Initialization
console.log("Mochi initialized successfully");
console.log("Mochi loaded successfully");

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Mochi service worker registered:', registration);
            })
            .catch(error => {
                console.log('Mochi service worker registration failed:', error);
            });
    });
}

// App initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log("Mochi DOM ready");
    
    // Check if app loads correctly
    const app = document.getElementById('app');
    if (app) {
        console.log("Mochi app container found");
    }
});