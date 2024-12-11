
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

function updateProgress() {
    const totalQuestions = 5;
    let answeredQuestions = 0;

    if(document.getElementById('age-input').value) answeredQuestions++;
    if(document.querySelectorAll('input[name="interests"]:checked').length > 0) answeredQuestions++;
    if(document.querySelector('input[name="satisfaction"]:checked')) answeredQuestions++;
    if(document.querySelector('input[name="discovery"]:checked')) answeredQuestions++;
    if(document.querySelector('textarea[name="suggestions"]').value.trim()) answeredQuestions++;

    const progress = (answeredQuestions / totalQuestions) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function handleQuestionnaire(event) {
    event.preventDefault();

    const age = document.getElementById('age-input').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(checkbox => checkbox.value);
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked')?.value;
    const discovery = document.querySelector('input[name="discovery"]:checked')?.value;
    const suggestions = document.querySelector('textarea[name="suggestions"]').value;

    if (age && interests.length > 0 && satisfaction && discovery) {
        // Store form data if needed
        console.log('Réponses du questionnaire:', {
            age: parseInt(age),
            interests,
            satisfaction,
            discovery,
            suggestions
        });

        // Create success page content
        document.body.innerHTML = `
      <div class="container" style="text-align: center;">
        <h2>Félicitations !</h2>
        <div style="margin: 2rem 0;">
          <p style="font-size: 1.2rem; color: var(--success);">
            Merci d'avoir complété le questionnaire !
          </p>
          <p style="margin-top: 1rem;">
            Vos réponses ont été enregistrées avec succès.
          </p>
        </div>
        <button onclick="window.location.href='index.html'" style="max-width: 200px; margin: 0 auto;">
          Retour à l'accueil
        </button>
      </div>
    `;

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Add event listeners for progress tracking
document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('change', updateProgress);
});
document.querySelector('textarea').addEventListener('input', updateProgress);
