function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
    activePage.classList.add('animate__rotateInUpLeft');

    // Temporarily hide the scrollbar
    document.body.style.overflow = 'hidden';

    // Remove the animation class and show the scrollbar after the animation ends
    activePage.addEventListener('animationend', () => {
        activePage.classList.remove('animate__rotateInUpLeft');
        // Show the scrollbar again
        document.body.style.overflow = 'auto';
    }, { once: true });
}