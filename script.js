
const questions = [
    {
        question: "Which language runs in the browser?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: ".js is the file extension for?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Which HTML5 element is best suited for defining the footer of a document or section?",
        options: ["<bottom>", "<footer>", "<section>", "<aside>"],
        answer: "<footer>"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which keyword is used to declare a block-scoped local variable in modern JavaScript (ES6+)?",
        options: ["let", "var", "dim", "define"],
        answer: "let"
    }
];

let questionNo = document.querySelector("#questionNo");
let nextBtn = document.querySelector(".nextBtn");

let questionElement = document.querySelector(".question");
let optionsElement = document.querySelector(".options");

let questionContainer = document.querySelector(".questionContainer");
let resultContainer = document.querySelector(".resultContainer");
let scoreElement = document.querySelector(".scoreNo");
let restartBtn = document.querySelector(".restartBtn");

let currentQCnt = 0;
let selectedOption = "";
let answered = false;
let score = 0;


// Display current question
function showQuestion() {

    let currQuestion = questions[currentQCnt];

    questionElement.innerText = currQuestion.question;
    questionNo.innerText = currentQCnt + 1;

    optionsElement.innerHTML = "";

    answered = false;
    selectedOption = "";

    currQuestion.options.forEach((option) => {

        let btn = document.createElement("button");

        btn.innerText = option;
        btn.classList.add("optionBtn");

        optionsElement.appendChild(btn);

        btn.addEventListener("click", () => {

            if (answered) return;

            answered = true;
            selectedOption = btn.innerText;

            if (selectedOption === currQuestion.answer) {

                btn.classList.add("selectedCorrect");

            } else {

                btn.classList.add("selectedWrong");

                let allButtons = optionsElement.querySelectorAll(".optionBtn");

                allButtons.forEach((button) => {

                    if (button.innerText === currQuestion.answer) {
                        button.classList.add("selectedCorrect");
                    }

                });
            }

        });

    });

}


// Check selected answer and update score
function checkAnswer() {

    let currQuestion = questions[currentQCnt];

    if (selectedOption === currQuestion.answer) {
        score++;
    }

}


// Display final result
function result() {

    questionContainer.classList.add("hidden");

    resultContainer.classList.remove("hidden");

    scoreElement.innerText =
        `Your score is ${score}/${questions.length}`;

}


// Restart quiz
function restartQuiz() {

    currentQCnt = 0;
    score = 0;
    selectedOption = "";
    answered = false;

    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");

    showQuestion();

}


// Next button functionality
nextBtn.addEventListener("click", () => {

    if (!answered) {
        alert("Please select an answer!");
        return;
    }

    checkAnswer();

    if (currentQCnt < questions.length - 1) {

        currentQCnt++;

        showQuestion();

    } else {

        result();

        console.log("Quiz completed!");

    }

});


// Restart button functionality
restartBtn.addEventListener("click", restartQuiz);


// Initial question
showQuestion();
