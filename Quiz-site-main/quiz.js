if (sessionStorage.getItem('full name') === null) {
    window.location.href='https://abdallah-alhasan.github.io/Quiz-site/sign-up.html';
}
let question = document.getElementById("question");
let finishBtn = document.getElementById("finish");
let nextQuestion = document.getElementById("next");
let count = document.getElementById("count");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let section = document.getElementById("section");
let allResult = [];
let currQues = 0;
let isCheck = false;
sec.innerHTML = "59";
let timer = setInterval(secTimer, 1000);
function secTimer() {
  sec.innerHTML -= 1;
  if (sec.innerHTML == -1) {
    min.innerHTML -= 1;
    sec.innerHTML = 59;
  }
}
add(data[currQues]);

function next() {
  for (j = 0; j < 4; j++) {
    ans1[j].style.backgroundColor = "#3f3d56";
  }

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
    confirmButtonColor: "#3f3d56af",
  });
}

function add(text) {
  if (!text) return;
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
  } else if (currQues === 9) {
    nextQuestion.innerHTML = "Next to Technical ";
  } else {
    nextQuestion.innerHTML = "Next";
  }
  if (currQues == 19) {
    finishBtn.style.display = "block";
    nextQuestion.style.display = "none";
  }
  if (currQues <= 4) {
    section.innerHTML = "English Quiz";
  } else if (currQues <= 9) {
    section.innerHTML = "IQ Quiz";
  } else if (currQues <= 19) {
    section.innerHTML = "Technical Quiz";
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
let ans = document.querySelectorAll("label");
let ans1 = document.querySelectorAll(".answer");
for (i = 0; i < ans.length; i++) {
  ans[i].onclick = function () {
    for (j = 0; j < 4; j++) {
      ans1[j].style.backgroundColor = "#3f3d56";
    }
    ans1[this.getAttribute("for") - 1].style.backgroundColor = "#9abae1";
  };
}

function finish() {
  next();
  sessionStorage.setItem("result", JSON.stringify(allResult));
  window.location.href = "https://abdallah-alhasan.github.io/Quiz-site/result.html"
}