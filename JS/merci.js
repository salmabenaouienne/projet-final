const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const merciMsg = document.querySelector('.merci');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    const select = form.querySelector('select');
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });
    if (!select.value) {
        allFilled = false;
    }
    if (allFilled) {
        form.style.display = 'none';
        merciMsg.style.display = 'block';
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});

