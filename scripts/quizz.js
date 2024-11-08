const questions = [
    { question: "La spondylarthrite ankylosante (SA) est une maladie qui peut être guérie avec les traitements appropriés.", answer: false },
    { question: "La SA touche principalement les personnes âgées de plus de 50 ans.", answer: false },
    { question: "Les hommes et les femmes sont touchés par la SA de manière presque égale.", answer: true },
    { question: "Les facteurs environnementaux et les événements émotionnels peuvent jouer un rôle dans le déclenchement de la SA.", answer: true },
    { question: "La SA provoque une inflammation dans une zone spécifique des articulations appelée enthèse.", answer: true },
    { question: "Les symptômes de la SA sont souvent plus marqués le matin, nécessitant un 'dérouillage' au réveil.", answer: true },
    { question: "La SA évolue souvent par poussées, avec des périodes d'aggravation et de rémission.", answer: true },
    { question: "La SA peut entraîner une fusion des vertèbres, provoquant une raideur permanente de la colonne vertébrale.", answer: true },
    { question: "Les anti-inflammatoires non stéroïdiens (AINS) sont inefficaces pour soulager les symptômes de la SA.", answer: false },
    { question: "La SA ne provoque que des symptômes articulaires, comme les douleurs au dos ou aux hanches.", answer: false },
    { question: "Le test HLA-B27 peut être utilisé pour aider à diagnostiquer la SA.", answer: true },
    { question: "La kinésithérapie est une partie essentielle de la gestion de la SA.", answer: true },
    { question: "Les douleurs de la SA se manifestent souvent de manière symétrique, dans les deux côtés des fesses en même temps.", answer: false },
    { question: "Les critères d’Amor sont utilisés pour évaluer le besoin d’un suivi psychologique chez les patients SA.", answer: false },
    { question: "Il est recommandé aux personnes atteintes de SA de consulter un ophtalmologue en cas de symptômes oculaires comme des uvéites.", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedbackElement = document.getElementById("feedback");
    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackElement.innerText = "Correct !";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = "Incorrect.";
        feedbackElement.style.color = "red";
    }
    document.getElementById("next-btn").style.display = "inline-block";
    updateScore();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateScore() {
    document.getElementById("score").innerText = `Score : ${score} / ${questions.length}`;
}

function endQuiz() {
    document.getElementById("question-container").innerHTML = "<h2>Merci d'avoir complété le quiz !</h2>";
    document.getElementById("next-btn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    updateScore();
});