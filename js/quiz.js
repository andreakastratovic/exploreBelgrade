const quizData = [
    {
        question: "What is the capital of Serbia?",
        options: ["Belgrade", "Novi Sad", "Niš", "Kragujevac"],
        answer: "Belgrade"
    },
    {
        question: "Which historical monument is located in Belgrade?",
        options: ["Petrovaradin Fortress", "Oplenac", "Kalemegdan", "Žiča Monastery"],
        answer: "Kalemegdan"
    },
    {
        question: "What is the name of the main pedestrian street in Belgrade?",
        options: ["Knez Mihailova Street", "Terazije Street", "Skadarlija Street", "Bulevar Kralja Aleksandra"],
        answer: "Knez Mihailova Street"
    },
    {
        question: "Which mountain is located near Belgrade?",
        options: ["Fruška Gora", "Tara", "Kopaonik","Avala"],
        answer: "Avala"
    },
    {
        question: "Which island on the Sava River is a popular recreational area?",
        options: [ "Great War Island", "Košutnjak", "Ada Ciganlija","Zemun"],
        answer: "Ada Ciganlija"
    },
    {
        question: "What is the name of the largest park in Belgrade?",
        options: ["Tasmajdan Park", "Kalemegdan Park", "Košutnjak", "Zemun Park"],
        answer: "Košutnjak"
    },
    {
        question: "What is the name of the main square in Belgrade?",
        options: ["Republic Square", "Nikola Pašić Square", "Students Square", "Slavija Square"],
        answer: "Republic Square"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('quiz-question').style.display = 'block';
    document.getElementById('quiz-question').textContent = currentQuestion.question;
    const quizOptions = document.getElementById('quiz-options');
    quizOptions.style.display = 'block';
    quizOptions.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option));
        quizOptions.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-question').style.display = 'none';
    document.getElementById('quiz-options').style.display = 'none';
    document.getElementById('quiz-submit').style.display = 'none';
    document.getElementById('quiz-result').textContent = `You scored ${score} out of ${quizData.length}!`;
    document.getElementById('quiz-retry').style.display = 'block';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-result').textContent = '';
    document.getElementById('quiz-retry').style.display = 'none';
    loadQuestion();
}

document.getElementById('quiz-retry').addEventListener('click', resetQuiz);

// Start the quiz
loadQuestion();
