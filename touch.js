const ul = document.querySelector("#goods ul");
let startX = 0;
let currentLeft = 0;

ul.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

ul.addEventListener('touchmove', function(e) {
    const moveX = e.touches[0].clientX;
    const deltaX = moveX - startX;
    const newLeft = currentLeft + deltaX;

    const maxLeft = ul.scrollWidth - ul.clientWidth;
    const boundedLeft = Math.max(-maxLeft, Math.min(0, newLeft));
    ul.style.left = boundedLeft + 'px';
});

ul.addEventListener('touchend', function(e) {
    currentLeft = parseInt(ul.style.left) || 0;
});