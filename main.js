document.addEventListener("DOMContentLoaded", () => {
    const wrapperCard = document.getElementById('wrapper');
    const overlay = document.getElementById('overlay');
    const form = document.getElementById('form');
    const dismissButton = overlay.querySelector('button');

    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // validation
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){
            emailInput.classList.add('error');
            
            errorMessage.textContent = 'Valid email required';
            errorMessage.classList.add('visible');
            return;
        }
        
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
        errorMessage.classList.remove('visible');


        // overlay code
        wrapperCard.style.display = 'none';
        overlay.style.display = '';
    });

    dismissButton.addEventListener('click',()=>{
        overlay.style.display='none';
        wrapperCard.style.display = 'none';
    });
});
