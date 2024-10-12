let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Função para mostrar a próxima imagem
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

// Adiciona o evento de clique nas imagens para ativar o zoom
images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src; // Define a imagem selecionada no lightbox
        lightbox.style.display = 'flex'; // Exibe o lightbox
    });
});

// Fecha o lightbox ao clicar na imagem ampliada
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Oculta o lightbox
});
