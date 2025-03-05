const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

updateImage();