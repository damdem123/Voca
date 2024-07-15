const questions = [
    {
        question: "‘resolve’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "풀어내다", correct: false },
            { text: "해결하다", correct: true },
            { text: "맹세하다", correct: false },
            { text: "약속하다", correct: false }
        ],
        points: 10
    },
    {
        question: "‘conquer’ 의 뜻으로 옳지 않은 것은?",
        answers: [
            { text: "승리하다", correct: true },
            { text: "이겨내다", correct: false },
            { text: "정복하다", correct: false },
            { text: "극복하다", correct: false }
        ],
        points: 10
    },
    {
        question: "‘landscape’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "초상화", correct: false },
            { text: "면적", correct: false },
            { text: "탈출", correct: false },
            { text: "풍경", correct: true }
        ],
        points: 10
    },
    {
        question: "‘regularity’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "근본적임", correct: false },
            { text: "규칙적임", correct: true },
            { text: "확정적임", correct: false },
            { text: "불규칙적임", correct: false }
        ],
        points: 10
    },
    {
        question: "‘다양한’ 의 뜻을 가진 영어단어로 알맞은 것은?",
        answers: [
            { text: "various", correct: false },
            { text: "diversified", correct: false },
            { text: "diverse", correct: true },
            { text: "different", correct: false }
        ],
        points: 10
    },
    {
        question: "‘contemporary’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "시공간의", correct: false },
            { text: "영원의", correct: false },
            { text: "과거의", correct: false },
            { text: "동시대의", correct: true }
        ],
        points: 10
    },
    {
        question: "‘citation’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "표챵", correct: true },
            { text: "도용", correct: false },
            { text: "국가", correct: false },
            { text: "상황", correct: false }
        ],
        points: 10
    },
    {
        question: "‘prohibition’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "취미", correct: false },
            { text: "금지", correct: true },
            { text: "오락", correct: false },
            { text: "호기심", correct: false }
        ],
        points: 10
    },
    {
        question: "‘paradox’ 의 뜻으로 알맞은 것은?",
        answers: [
            { text: "속담", correct: false },
            { text: "조언", correct: false },
            { text: "역설", correct: true },
            { text: "충고", correct: false }
        ],
        points: 10
    },
    {
        question: "‘역효과를 내는’ 의 뜻을 가진 영어단어로 알맞은 것은?",
        answers: [
            { text: "counterproductive", correct: true },
            { text: "ineffective", correct: false },
            { text: "effective", correct: false },
            { text: "uneffective", correct: false }
        ],
        points: 10
    },
    // 더 많은 질문을 추가 하려면 같은 방식으로 만들어 내기
];

const vocabulary = [
    { word: "resolve", meaning: "해결하다, 다짐하다" },
    { word: "regularity", meaning: "정기적임, 규칙적임" },
    { word: "landscape", meaning: "풍경, 풍경화" },
    { word: "conquer", meaning: "정복하다, 이겨 내다, 극복하다" },
    { word: "contemporary", meaning: "현대의, 동시대의" },
    { word: "diverse", meaning: "다양한" },
    { word: "paradox", meaning: "역설" },
    { word: "citation", meaning: "표창, 인용, 인용문" },
    { word: "counterproductive", meaning: "역효과를 내는" },
    { word: "prohibition", meaning: "(특히 법에 의한)금지" },

    // 더 많은 단어를 추가할 수 있습니다
];



const menuContainer = document.getElementById('menu-container');
const quizContainer = document.getElementById('quiz-container');
const vocabContainer = document.getElementById('vocab-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const vocabList = document.getElementById('vocab-list');
const quizMenuButton = document.getElementById('quiz-menu-btn');
const vocabMenuButton = document.getElementById('vocab-menu-btn');
const restartButton = document.getElementById('restart-btn');
const menuButton = document.getElementById('quiz-menu-btn-result');
const vocabMenuButtonBack = document.getElementById('vocab-menu-btn-back');

let currentQuestionIndex = 0;
let score = 0;

quizMenuButton.addEventListener('click', showQuiz);
vocabMenuButton.addEventListener('click', showVocab);
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
});
restartButton.addEventListener('click', startQuiz);
menuButton.addEventListener('click', showMenu);
vocabMenuButtonBack.addEventListener('click', showMenu);

function showMenu() {
    menuContainer.classList.remove('hide');
    quizContainer.classList.add('hide');
    vocabContainer.classList.add('hide');
    resultContainer.classList.add('hide');
    startButton.classList.add('hide');
    restartButton.classList.add('hide');
}

function showQuiz() {
    menuContainer.classList.add('hide');
    vocabContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    startQuiz();
}

function showVocab() {
    menuContainer.classList.add('hide');
    quizContainer.classList.add('hide');
    vocabContainer.classList.remove('hide');
    vocabList.innerHTML = ''; // 기존 단어 목록 초기화
    vocabulary.forEach(item => {
        const vocabItem = document.createElement('p');
        vocabItem.innerText = `${item.word}: ${item.meaning}`;
        vocabList.appendChild(vocabItem);
    });
}

function startQuiz() {
    startButton.classList.add('hide');
    restartButton.classList.add('hide');
    score = 0;
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    nextButton.classList.add('hide');
    nextButton.innerText = '다음';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    if (correct) {
        score += questions[currentQuestionIndex].points;
    }
    nextButton.classList.remove('hide');
    if (currentQuestionIndex + 1 === questions.length) {
        nextButton.innerText = '결과 보기';
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.innerText = `당신의 점수는 ${score}점입니다.`;
    nextButton.classList.add('hide');
    startButton.classList.remove('hide');
    restartButton.classList.remove('hide');
    startButton.innerText = '다시 시작';
}