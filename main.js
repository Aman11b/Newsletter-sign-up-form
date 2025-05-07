document.addEventListener("DOMContentLoaded", () => {
    const wrapperCard = document.getElementById('wrapper');
    const overlay = document.getElementById('overlay');
    const form = document.getElementById('form');
    const dismissButton = overlay.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        wrapperCard.style.display = 'none';
        overlay.style.display = '';
    });

    dismissButton.addEventListener('click',()=>{
        overlay.style.display='none';
        wrapperCard.style.display = 'none';
    })
});
