const startBtn = document.getElementById('startBtn')
const questionBoxEl = document.getElementById('question-box')
const questionEl = document.getElementById('question')
const answerBtnEl = document.getElementById('answer-btns')
const timerEl = document.getElementById('timer')

let queShuffle, currentQuestion

startBtn.addEventListener('click', startGame)
nextQuestion.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

// Start button
function startGame() {
    startBtn.classList.add('hide');
    queShuffle = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionBoxEl.classList.remove('hide');
    nextQuestion();
} 

function startTime() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    timerEl.innerHTML = '${mintues}: ${seconds}';
    time --;
}

// Move to next question with answer, reset
function nextQuestion() {``
    resetState()
    showQuestion(queShuffle[currentQuestion])
}

// Show question and answers in question box
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerBtnEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}

// provides answers to question box from array and event target for addEventListener that switches to next question
function chooseAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (queShuffle.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }  
}   



// if statements for question actions
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
 }


// Formating questions array
const questions = [
    {
        question: "Who finds Laura Palmer on the beach?",
        answer: [
            {text: "Sheriff Harry Truman", correct: false},
            {text: "Pete", correct: true},
            {text: "Jacque Renault", correct: false},
            {text: "Audrey Horne", correct: false}
        ]
    },
    {
        question: "What is agent Dale Coopers favorite beverage?",
        answer: [
            {text: "stong black coffe", correct: true},
            {text: "a Shirley Temple", correct: false},
            {text: "Lasso Beer", correct: false},
            {text: "water", correct: false}
        ],
    },
    {
        question: "What is the name of the casino run b


y Ben Horne?",
        answer: [
            {text: "Ace In the Hole", correct: false},
            {text: "Blackjack's", correct: false},
            {text: "Jack with One Eye", correct: false},
            {text: "One Eyed Jack's", correct: true}
        ],    
    },
    {
        question: "In the black lodge, Laura tells Dale Cooper that 'Sometimes my arms ____?",
        answer: [
            {text: "fly up", correct: false},
            {text: "fall off", correct: false},
            {text: "bend back", correct: true},
            {text: "go numb", correct: false}
        ],
    },
    {
        question: "What warning does The Giant give Dale Cooper after he is shot?",
        answer: [
            {text: "Watch your back.", correct: false},
            {text: "The car is unlocked", correct: false},
            {text: "It's happening again.", correct: true},
            {text: "They aren't who they seem", correct: false}
        ]
    }
] 
console.log(questions)