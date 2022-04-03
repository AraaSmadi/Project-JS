function Show() {
    let result = JSON.parse(sessionStorage.getItem("result"));
    document.getElementById("q").innerHTML = "Quastion";
    document.getElementById("c").innerHTML = "Correct quastion";
    document.getElementById("s").innerHTML = "Selectd quastion";

    let t = document.getElementsByClassName("content-table")[0];
    t.style.display = "block"

    for (let i = 0; i < result.length; i++) {
        t.innerHTML += " <tbody><tr> <td>" + result[i].question + "</td>" +
            `<td class ="correct">` + result[i].correct + "</td>" +
            `<td class ="select ">` + result[i].answer + "</td></tr></tbody>";
        console.log(result[i].answer)
    }

    let correct = document.getElementsByClassName('correct');
    let select = document.getElementsByClassName('select');

    for (let i = 0; i < correct.length; i++) {
        if (correct[i].innerHTML == select[i].innerHTML) {
            select[i].style.color = '#009879';
        } else {
            select[i].style.color = '#C9485B';
        }
    }
    let av = function() {
        let index = 0;
        for (let i = 0; i < result.length; i++) {
            if (result[i].isTrue === true) {

                index++
            }
        }
        let a = index / 20 * 100;
        return a
    }
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i].isTrue === true) {
            counter++

        }
    }

    if (counter >= 10) {
        document.getElementById('header').style.backgroundColor = '#009879';
        document.getElementById('grade').style.color = '#009879';
        document.getElementById('img').src = "image/agree.svg";
        document.getElementById('img').style.width = '305px';
        document.body.style.background = 'white';
        document.getElementById('grade').innerHTML = "The result : " + av() + "%" + " <br>" + "  Congratulation . . ";
        var btn = document.getElementById('btn')
        btn.innerHTML = "Close";
        btn.onclick = function() {
            window.location.href = 'http://127.0.0.1:5500/Project%20Java%20Scribt/index.html';
        }
    } else {
        let tds = document.getElementsByTagName('td');
        for (let i = 0; i < tds.length; i++) {
            tds[i].style.borderBottom = 'solid 2px #C9485B';
        }
        document.getElementById('header').style.backgroundColor = '#C9485B';
        document.getElementById('grade').style.color = '#C9485B';
        document.getElementById('btn').style.backgroundColor = '#C9485B';
        document.getElementById('img').style.width = '305px';
        document.getElementById('img').src = "image/cancel.svg";
        document.body.style.background = 'white';
        document.getElementById('grade').innerHTML = "The result : " + av() + "%" + " <br>" + "   Unfortunately . .";
        var btn = document.getElementById('btn')
        btn.innerHTML = "Close";

    }
    btn.onclick = function() {
        window.location.href = 'http://127.0.0.1:5500/Project%20Java%20Scribt/index.html';
    }


}