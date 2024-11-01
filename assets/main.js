
const questions = [
    {
        question: "Qual destes é um método eficaz de prevenção contra DSTs?",
        options: ["Uso de preservativo", "Banho após a relação", "Uso de antibióticos sem prescrição", "Exercícios físicos"],
        answer: "Uso de preservativo",
        feedback: "Correto! O uso de preservativos é uma das formas mais eficazes de prevenção contra DSTs."
    },
    {
        question: "Qual destes é um sintoma comum de algumas DSTs?",
        options: ["Coceira intensa", "Fome excessiva", "Dores musculares", "Palpitações cardíacas"],
        answer: "Coceira intensa",
        feedback: "Correto! Coceira e secreções incomuns são sintomas comuns em algumas DSTs."
    },
    {
        question: "O que é verdade sobre o HIV?",
        options: ["Só pode ser transmitido por sangue", "Pode ser transmitido pelo beijo", "Pode ser transmitido através do sexo desprotegido", "Sempre apresenta sintomas claros"],
        answer: "Pode ser transmitido através do sexo desprotegido",
        feedback: "Correto! O HIV pode ser transmitido pelo sexo desprotegido, entre outras formas."
    },
    {
        question: "Visitar o médico regularmente ajuda na prevenção de DSTs?",
        options: ["Sim", "Não"],
        answer: "Sim",
        feedback: "Correto! Consultas regulares ajudam no diagnóstico precoce e prevenção de complicações."
    },
    {
        question: "Deve-se interromper o tratamento de DSTs ao sumirem os sintomas?",
        options: ["Sim", "Não"],
        answer: "Não",
        feedback: "Correto! Mesmo com a melhora, é importante completar o tratamento."
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    // Limpa o feedback e o botão de próxima
    feedbackElement.innerHTML = '';
    nextBtn.style.display = 'none';

    // Carrega a questão
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Carrega as opções de resposta
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(button, currentQuestion);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(button, question) {
    const feedbackElement = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    // Verifica se a resposta está correta
    if (button.innerText === question.answer) {
        score++;
        feedbackElement.innerHTML = `<span style="color: green;">${question.feedback}</span>`;
    } else {
        feedbackElement.innerHTML = `<span style="color: red;">Resposta incorreta. </span>${question.feedback}`;
    }

    // Exibe o botão para próxima pergunta
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const questionContainer = document.getElementById('question-container');
    const scoreContainer = document.getElementById('score-container');

    questionContainer.innerHTML = '';
    scoreContainer.innerHTML = `Parabéns! Você acertou ${score} de ${questions.length} perguntas.`;
}

// Inicializa o jogo
loadQuestion();
