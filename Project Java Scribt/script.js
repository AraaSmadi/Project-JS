let question = document.getElementById("question");
let finishBtn = document.getElementById("finish");
let nextQuestion = document.getElementById("next");
let count = document.getElementById("count");
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let allResult = [];
let currQues = 0;
let isCheck = false;
sec.innerHTML = "59"
let timer = setInterval(secTimer, 1000)

function secTimer() {
    sec.innerHTML -= 1
    if (sec.innerHTML == -1) {
        min.innerHTML -= 1
        sec.innerHTML = 59
    }

}
add(data[currQues]);

function next() {
    let radio = document.getElementsByTagName("input");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            radio[i].checked = false;
            let correctAnswer = data[currQues].correct; //Save the correct answer
            currQues++;
            check(correctAnswer, radio[i].defaultValue);
            add(data[currQues]);

            return;
        }
    }
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select an answer!",
    });
}

function add(text) {
    let countQue = currQues + 1;
    question.innerHTML = `Question${[countQue]}` + ":" + " " + text["question"];
    count.innerHTML = "question :  " + " " + `${[countQue]}` + "/20";
    let input = document.getElementsByTagName("input");
    for (let i = 1; i <= 4; i++) {
        let label = document.getElementById(`answer${i}`);
        input[i - 1].value = text[`answer_${i}`];
        label.innerHTML = text[`answer_${i}`];
    }
    if (currQues === 4) {
        nextQuestion.innerHTML = "Next to IQ questions";
    } else if (currQues === 8) {
        nextQuestion.innerHTML = "Next to Technical questions";
    } else {
        nextQuestion.innerHTML = "Next";
    }
    if (currQues == 19) {
        finishBtn.style.display = "block";
        nextQuestion.style.display = "none";
    }
}

function check(correctAnswer, selected) {
    let result = {
        question: "",
        answer: "",
        correct: "",
        isTrue: false,
    };
    let answers = document.getElementsByName("answer");

    for (let i = 0; i < answers.length; i++) {
        if (correctAnswer == selected) {
            result.isTrue = true;
        }
        result.answer = selected;
        result.correct = correctAnswer;
        result.question = question.innerHTML;
    }
    allResult.push(result);
}

function finish() {
    next();
    sessionStorage.setItem("result", JSON.stringify(allResult));
    window.location.href = "http://127.0.0.1:5500/Project%20Java%20Scribt/result.html";

    // let x = JSON.parse(sessionStorage.getItem("result"));
    // for (let i = 0; i < x.length; i++) {
    //   console.log(x[i].question);
    // }
}