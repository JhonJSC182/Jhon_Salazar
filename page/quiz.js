const questions = [
    {
        question: "In what country is the largest oil field located?",
        answers: [
            {text: "Saudi Arabia", correct: true},
            {text: "United States of America", correct: false},
            {text: "Venezuela", correct: false},
            {text: "Iran", correct: false},
        ]
    },

    {
        question: "What is palladium named after?",
        answers: [
            {text: "Astronomer William Palladium", correct: false},
            {text: "Your pal ladium", correct: false},
            {text: "From Pallas, the second-largest asteroid in the asteroid belt", correct: true},
            {text: "The ancient Greek goddess Pallas Athena", correct: false},
        ]
    },

    {
        question: "Factors that determine cattle prices",
        answers: [
            {text: "How hungry people are divided by the amount of cattles plus the cost of production", correct: false},
            {text: "Feed prices, goverment regulations, the increase/decrease in turism for that specific country", correct: false},
            {text: "Feed prices, gas prices and sweat equity", correct: false},
            {text: "Feed prices, weather, global demand for beef, substitution and energy prices", correct: true},
        ]
    },
    {
        question: "When were soybeans first brought to North America",
        answers: [
            {text: "During the Civil war", correct: false},
            {text: "Early in the 19th century", correct: true},
            {text: "They were already here and indians loved it", correct: false},
            {text: "When soy sauce came out", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); //classList adds an element 
        answerButtons.appendChild(button); //puttig the button created to each one of the questions
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
};

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz();