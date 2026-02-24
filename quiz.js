const questions = [
{
q: "¿En qué año nació Carlos Fonseca?",
a: ["1936","1940","1925"],
correct: 0
},
{
q: "¿Qué carrera estudió?",
a: ["Medicina","Derecho","Ingeniería"],
correct: 1
},
{
q: "¿En qué año se fundó el FSLN?",
a: ["1955","1961","1970"],
correct: 1
},
{
q: "¿Cuál fue su seudónimo?",
a: ["Agatón","Rafael","Sandino"],
correct: 0
},
{
q: "¿En qué año murió?",
a: ["1976","1980","1970"],
correct: 0
}
];

let score = 0;
let current = 0;

function loadQuiz() {
    if(current >= questions.length) {
        document.getElementById("quiz-container").innerHTML =
        `<h3>Puntuación final: ${score} / ${questions.length}</h3>`;
        return;
    }

    const q = questions[current];
    let html = `<h3>${q.q}</h3>`;
    q.a.forEach((opt,i)=>{
        html += `<button onclick="checkAnswer(${i})">${opt}</button><br><br>`;
    });

    document.getElementById("quiz-container").innerHTML = html;
}

function checkAnswer(i) {
    if(i === questions[current].correct) score++;
    current++;
    loadQuiz();
}

document.addEventListener("DOMContentLoaded", loadQuiz);