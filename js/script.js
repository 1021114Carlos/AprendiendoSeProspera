document.addEventListener('DOMContentLoaded', function () {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.style.transform = 'scale(1.05)';
        });

        tile.addEventListener('mouseleave', () => {
            tile.style.transform = 'scale(1)';
        });

        tile.addEventListener('click', () => {
            const sectionId = tile.querySelector('a').getAttribute('href');
            window.location.href = sectionId;
        });
    });
});
