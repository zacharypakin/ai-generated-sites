document.addEventListener("DOMContentLoaded", function () {
    // Get navigation links
    const navLinks = document.querySelectorAll('#main-nav a');

    // Apply smooth scrolling effect
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetPosition = document.querySelector(targetId).offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    }

    // Adding a simple lightbox effect for images
    const images = document.querySelectorAll('.image-container img');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            // Create overlay element
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.right = '0';
            overlay.style.bottom = '0';
            overlay.style.left = '0';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.cursor = 'pointer';

            // Create image element
            const image = document.createElement('img');
            image.src = this.src;
            image.style.maxWidth = '80%';
            image.style.maxHeight = '80%';
            image.style.boxShadow = '0px 0px 20px rgba(255, 255, 255, 0.3)';

            // Append image to overlay
            overlay.appendChild(image);

            // Append overlay to body
            document.body.appendChild(overlay);

            // Remove overlay on click
            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    }
});
