if (sessionStorage.getItem('full name') === null) {
    window.location.href='https://abdallah-alhasan.github.io/Quiz-site/sign-up.html';
}
function Show() {
    let result = JSON.parse(sessionStorage.getItem("result"));
    let Q = document.getElementById("quastions");
    let counters = 0;
    for (let i = 0; i < result.length; i++) {
        Q.innerHTML += ` <div class="all_quastion"><h3> ${result[i].question} </h3><hr><br> <label id = la${i} ></label> <p id = a${i}>${data[i].answer_1} </p> <br> <label id = lb${i}></label><p id = b${i}> ${data[i].answer_2} </p><br> <label id = lc${i}></label> <p id = c${i}> ${data[i].answer_3} </p><br> <label id = ld${i}></label> <p id = d${i}> ${data[i].answer_4} </p>`;
        counters++;

        for (let j = 0; j < 4; j++) {
            if (data[i].correct === data[i].answer_1) {
                document.getElementById(`a${i}`).style.background = "#00987aa0";
            } else {
                document.getElementById(`a${i}`).style.background = "#c9485baf";
            }

            if (data[i].correct === data[i].answer_2) {
                document.getElementById(`b${i}`).style.background = "#00987aa0";
            } else {
                document.getElementById(`b${i}`).style.background = "#c9485baf";
            }

            if (data[i].correct === data[i].answer_3) {
                document.getElementById(`c${i}`).style.background = "#00987aa0";
            } else {
                document.getElementById(`c${i}`).style.background = "#c9485baf";
            }

            if (data[i].correct === data[i].answer_4) {
                document.getElementById(`d${i}`).style.background = "#00987aa0";
            } else {
                document.getElementById(`d${i}`).style.background = "#c9485baf";
            }
        }

        for (let j = 0; j < 4; j++) {
            if (result[i].answer === data[i].answer_1) {
                document.getElementById(`la${i}`).innerHTML = 'Your answer:';
                if (data[i].correct === result[i].answer) {
                    document.getElementById(`la${i}`).style.color = "#009879";
                } else {
                    document.getElementById(`la${i}`).style.color = "#C9485B";
                }
            }

            if (result[i].answer === data[i].answer_2) {
                document.getElementById(`lb${i}`).innerHTML = 'Your answer:';
                if (data[i].correct === result[i].answer) {
                    document.getElementById(`lb${i}`).style.color = "#009879";
                } else {
                    document.getElementById(`lb${i}`).style.color = "#C9485B";
                }
            }

            if (result[i].answer === data[i].answer_3) {
                document.getElementById(`lc${i}`).innerHTML = 'Your answer:';
                if (data[i].correct === result[i].answer) {
                    document.getElementById(`lc${i}`).style.color = "#009879";
                } else {
                    document.getElementById(`lc${i}`).style.color = "#C9485B";
                }
            }

            if (result[i].answer === data[i].answer_4) {
                document.getElementById(`ld${i}`).innerHTML = 'Your answer:';
                if (data[i].correct === result[i].answer) {
                    document.getElementById(`ld${i}`).style.color = "#009879";
                } else {
                    document.getElementById(`ld${i}`).style.color = "#C9485B";
                }
            }
        }
    }


    let av = function() {
        let index = 0;
        for (let i = 0; i < result.length; i++) {
            if (result[i].isTrue === true) {
                index++;
            }
        }
        let a = Math.round((index / 20) * 100);
        return a;
    };
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i].isTrue === true) {
            counter++;
        }
    }

    if (counter >= 10) {

        document.getElementById("grade").style.color = "#009879";
        document.getElementById("img").src = "images/agree.svg";
        document.getElementById("img").style.width = "305px";
        document.body.style.background = "white";
        document.getElementById("grade").innerHTML =
            "The result : " +
            av() +
            "%" +
            " <br>" +
            "  Congratulation,<br><span > we will arrange with  you the Second interview <span> ";
        var btn = document.getElementById("btn");
        btn.innerHTML = "Close";
        btn.onclick = function() {
            window.location.href ="https://abdallah-alhasan.github.io/Quiz-site/finish.html";
        };
    } else {

        document.getElementById("grade").style.color = "#C9485B";
        document.getElementById("btn").style.backgroundColor = "#C9485B";
        document.getElementById("img").style.width = "305px";
        document.getElementById("img").src = "images/cancel.svg";
        document.body.style.background = "white";
        document.getElementById("grade").innerHTML =
            "The result : " + av() + "%" + " <br>" + "  Unfortunately,<br><span > you did not fulfill our requirements, Good Luck <span> ";
        var btn = document.getElementById("btn");
        btn.innerHTML = "Close";
    }
    btn.onclick = function() {
        window.location.href =
            "https://abdallah-alhasan.github.io/Quiz-site/finish.html";
    };


}