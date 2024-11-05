document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2');
    
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            let nextElement = heading.nextElementSibling;
            while (nextElement && nextElement.tagName !== 'H2') {
                nextElement.classList.toggle('hidden');
                nextElement = nextElement.nextElementSibling;
            }
            heading.classList.toggle('active');
        });
    });
});
