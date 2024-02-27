document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    let currentIndex = 0;
    const slideCount = slides.children.length;
    const slideWidth = slides.children[0].clientWidth;
    const interval = 3000; // Ganti gambar setiap 3 detik

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    setInterval(nextSlide, interval);
});
