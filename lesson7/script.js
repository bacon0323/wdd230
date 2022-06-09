let imagesToLoad = document.querySelectorAll('img[data-src]');

function loadImages(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px -300px 0px'
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImages(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

imagesToLoad.forEach((img) => {
        loadImages(img);
    });
