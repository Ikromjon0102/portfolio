document.addEventListener("DOMContentLoaded", function() {
    // Initialize Flowbite carousel if it exists
    const carousel = document.getElementById('default-carousel');
    
    if (carousel) {
        // Using Flowbite carousel API
        // We don't need to manually control the carousel as Flowbite does it for us
        
        // But we can still make the manual controls work for compatibility
        const prevButton = document.querySelector('.carousel-control.prev');
        const nextButton = document.querySelector('.carousel-control.next');
        
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                // For Flowbite carousel, use the data attribute
                const prevButtonFlow = document.querySelector('[data-carousel-prev]');
                if (prevButtonFlow) {
                    prevButtonFlow.click();
                }
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                // For Flowbite carousel, use the data attribute
                const nextButtonFlow = document.querySelector('[data-carousel-next]');
                if (nextButtonFlow) {
                    nextButtonFlow.click();
                }
            });
        }
    } else {
        // Fallback to original carousel code if Flowbite carousel is not available
        let slideIndex = 1;
        
        function moveSlide(n) {
            slideIndex += n;
            showSlides(slideIndex);
        }
        
        function showSlides(n) {
            let slides = document.getElementsByClassName("carousel-item");
            if (n > slides.length) {
                slideIndex = 1;
            }
            
            if (n < 1) {
                slideIndex = slides.length;
            }
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            if (slides.length > 0) {
                slides[slideIndex - 1].style.display = "block";
            }
        }
        
        // Initialize the carousel
        showSlides(slideIndex);
        
        // Add event listeners to controls
        const prevButton = document.querySelector('.carousel-control.prev');
        const nextButton = document.querySelector('.carousel-control.next');
        
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                moveSlide(-1);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                moveSlide(1);
            });
        }
    }
    
    // Make carousel items visible on page load with Flowbite
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    if (carouselItems.length > 0) {
        // Show the first item
        carouselItems[0].classList.remove('hidden');
    }
});