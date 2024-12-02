
function toggleForm(formId) {
    document.querySelectorAll('form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(formId).classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'test@example.com' && password === 'password') {
        document.getElementById('login-error').style.display = 'none';
        toggleForm('questionnaire');
    } else {
        document.getElementById('login-error').textContent = 'Identifiants invalides';
        document.getElementById('login-error').style.display = 'block';
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password.length >= 6) {
        document.getElementById('signup-error').style.display = 'none';
        toggleForm('questionnaire');
    } else {
        document.getElementById('signup-error').textContent = 'Veuillez vérifier vos informations (le mot de passe doit contenir au moins 6 caractères)';
        document.getElementById('signup-error').style.display = 'block';
    }
}

function handleQuestionnaire(event) {
    event.preventDefault();

    const age = document.querySelector('input[name="age"]:checked')?.value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(checkbox => checkbox.value);

    if (age && interests.length > 0) {
        const successMessage = document.getElementById('questionnaire-success');
        successMessage.textContent = 'Merci d\'avoir complété le questionnaire !';
        successMessage.style.display = 'block';

        console.log('Réponses du questionnaire:', { age, interests });
    }
}
