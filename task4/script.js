const questions = [
    {
        question: "1. What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Task Machine Learning", "Home Tool Markup Language"],
        answer: 0
    },
    {
        question: "2. What is CSS used for?",
        options: ["Styling webpages", "Storing data", "Creating databases"],
        answer: 0
    },
    {
        question: "3. JavaScript is mainly used for:",
        options: ["Making webpages interactive", "Designing logos", "Editing photos"],
        answer: 0
    }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion() {
    const q = questions[index];
    questionEl.textContent = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach((opt, i) => {
        optionsEl.innerHTML += `
            <label>
                <input type="radio" name="option" value="${i}">
                ${opt}
            </label>
        `;
    });
}

nextBtn.onclick = function () {
    const selected = document.querySelector("input[name='option']:checked");

   
    if (!selected) {
        alert("Please select an answer before continuing.");
        return;
    }

    if (selected.value == questions[index].answer) {
        score++;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";

    resultEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

