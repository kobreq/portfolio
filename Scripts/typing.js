document.addEventListener('DOMContentLoaded', () => {
    if (typeof Typed !== 'function') {
        console.error('Typed.js not loaded');
        return;
    }

    new Typed(".multiple-text", {
        strings: [
            "Lorem",
            "Ipsum",
            "Dolor",
            "sit",
            "amet"
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });
});

