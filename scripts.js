document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2');
    
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            heading.nextElementSibling.classList.toggle('hidden');
            heading.classList.toggle('active');
        });
    });
});
