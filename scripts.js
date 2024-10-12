let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.next-btn').addEventListener('click', showNextImage);
document.querySelector('.prev-btn').addEventListener('click', showPrevImage);

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}
