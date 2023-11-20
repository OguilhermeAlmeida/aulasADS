const questionElement = document.getElementById('question');
const answerButtons = document.getElementsByClassName('answer-btn');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        answers: [
            { text: 'Rio de Janeiro', correct: false },
            { text: 'Brasília', correct: true },
            { text: 'São Paulo', correct: false },
            { text: 'Belo Horizonte', correct: false }
        ]
    },
    {
        question: 'Quem pintou a Mona Lisa?',
        answers: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        answers: [
            { text: 'William Shakespeare', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Miguel de Cervantes', correct: true },
            { text: 'Charles Dickens', correct: false }
        ]
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        answers: [
            { text: 'Terra', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Urano', correct: false },
            { text: 'Thais Carla', correct: false }
        ]
    },
    
];

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = question.answers[i].text;
        answerButtons[i].addEventListener('click', selectAnswer);
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const question = questions[currentQuestionIndex];

    if (question.answers[Array.from(answerButtons).indexOf(selectedButton)].correct) {
        score++;
        scoreElement.innerText = score;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        {text :'acabou , muito obrigado por jogar'}
    }
}

startGame();
