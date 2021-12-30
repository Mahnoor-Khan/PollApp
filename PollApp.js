const quizDB = [
    {
        question: "Q1: What is the full form of JS?",
        a: "JohnSmith",
        b: "JavaSource",
        c: "JavaScript",
        d: "JavaScan",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cast Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cast Super Style",
        d: "Castcading Style Source",
        ans: "ans2"
    },
    {
        question: "Q3: how to get Id in JS?",
        a: "getElementById()",
        b: "querySelector('#...')",
        c: "getElementsById",
        d: "Both a & b",
        ans: "ans4"
    },
    {
        question: "Q4: Choose the Right condition?",
        a: "a >= b",
        b: "a =< b",
        c: "a => b",
        d: "!b ==< a",
        ans: "ans1"
    },
    {
        question: "Q5: Scope of const is ?",
        a: "local scope",
        b: "block scope",
        c: "global scope",
        d: "none of these",
        ans: "ans2"
    }
]



let questionCount = 0

const ques = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const answers = document.querySelectorAll('.answer')
const scoreArea = document.querySelector('.scoreArea')
const Scored = document.querySelector('.Scored')
const totalScore = document.querySelector('.totalScore')
totalScore.innerHTML = quizDB.length
Scored.innerHTML = 0

getQuestion()

function getQuestion() {
    ques.innerHTML = quizDB[questionCount].question
    option1.innerHTML = quizDB[questionCount].a
    option2.innerHTML = quizDB[questionCount].b
    option3.innerHTML = quizDB[questionCount].c
    option4.innerHTML = quizDB[questionCount].d

}

const deselectAll = () => {
    answers.forEach((currentElem) => currentElem.checked = false);
}

const getCheckedAnswer = () => {
    let answer
    answers.forEach((currentElem) => {
        if (currentElem.checked) {
            answer = currentElem.id

        }
    })
    return answer;
}

function submission() {

    const checkedAns = getCheckedAnswer()
    if (checkedAns === quizDB[questionCount].ans) {
        Scored.innerHTML++

    }
    deselectAll()

    console.log(checkedAns)
    checkedAns.checked = false
    if (questionCount < quizDB.length - 1) {
        questionCount++;
        getQuestion()
    }
    else {
        scoreArea.style.display = "block"
    }
}