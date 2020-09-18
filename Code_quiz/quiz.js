// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");


start.addEventListener('click', startQuiz)

function startQuiz(){
console.log('Started')
start.classList.add('hide')
currentQuestionIndex = 0
question.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){

showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')
if (answer.correct) {
button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})
}

function selectAnswer(){

}

let questions = [
    {
        question : "What is the HTML tag under which one can write the JavaScript code?",
        choice1 : "<javascript>",
        choice2 : "<scripted>",
        choice3 : "<script>",
        choice4 : "<js>",
        correct : "<script>"
    },{
        question : "What is the correct syntax for referring to an external script called “geek.js”?",
        choice1 : "<script src=”geek.js”>",
        choice2 : "<script href=”geek.js”>",
        choice3 : "<script ref=”geek.js”>",
        choice4 : "<script name=”geek.js”>",
        correct : "<script src=”geek.js”>"
    },{
        question : "Which of the following is not a reserved word in JavaScript?",
        choice1 : "interface",
        choice2 : "throws",
        choice3 : "Correct",
        choice4 : "short",
        correct : "program"
    },{
        question : "What is the syntax for creating a function in JavaScript named as Geekfunc?",
        choice1 : "function = Geekfunc()",
        choice2 : "function Geekfunc()",
        choice3 : "function := Geekfunc()",
        choice4 : "function : Geekfunc()",
        correct : "function Geekfunc()"
    },{
        question : "How is the function called in JavaScript?",
        choice1 : "call Geekfunc();",
        choice2 : "call function GeekFunc();",
        choice3 : "Geekfunc();",
        choice4 : "function Geekfunc();",
        correct : "Geekfunc();"
    }
];

