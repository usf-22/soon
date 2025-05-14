document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in animation for the container
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '1';
    }, 200);
    
    // Animate social icons sequentially
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        
        setTimeout(() => {
            icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            icon.style.opacity = '1';
        }, 500 + (index * 100));
    });
});
