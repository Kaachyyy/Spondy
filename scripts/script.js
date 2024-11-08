//Script pop up


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the 'show' class
    });
});

document.querySelectorAll('nav > ul > li > a').forEach(item => {
    item.addEventListener('click', function(event) {
        const submenu = this.nextElementSibling;

        if (submenu) {
            event.preventDefault(); // Empêcher le lien de se suivre
            submenu.classList.toggle('hidden'); // Afficher/masquer le sous-menu
        }
    });
});

// Fermer les sous-menus lorsqu'un clic est effectué en dehors du menu
document.addEventListener('click', function(event) {
    const isClickInsideMenu = event.target.closest('nav');

    if (!isClickInsideMenu) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.classList.add('hidden'); // Fermer tous les sous-menus
        });
    }
});


function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Formulaire soumis:', data);
    alert('Merci pour votre don');
}

document.querySelector('select[required]').addEventListener('change', function(e) {
    if(e.target.value === 'custom') {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Entrer un montant';
        input.required = true;
        input.min = 1;
        e.target.parentNode.appendChild(input);
    } else {
        const customInput = e.target.parentNode.querySelector('input[type="number"]');
        if(customInput) customInput.remove();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.mission-card').forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

function closeDonationBubble() {
    const bubble = document.querySelector('.donation-bubble');
    bubble.style.animation = 'none';
    bubble.style.transform = 'scale(0)';
    bubble.style.transition = 'transform 0.3s ease';
}