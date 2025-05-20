const slides = document.querySelectorAll('.slider img'); 
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlides);

function initializeSlides() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide);
    }
    else {
        console.error("No slides found.");
        return;
    }
}

function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
}

function nextPic() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(slideIndex);
}

function prevPic() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(slideIndex);
}