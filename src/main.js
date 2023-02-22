var cnt = 0, id = 0, clickPower = 1, upgcnt = [0];

const pages = ["Main", "Upgrade", "Rebirth", "Achievement"],
    names = [
        "curPoints",
        "curPower",
        "cost1"
    ], func = [
        "cnt",
        "clickPower",
        "Math.floor(Math.pow(2, upgcnt[0]) * 10)"
    ];

function getName(s) {
    return "<span name='" + names[s] + "'></span>";
}
function newMessage(t, col = "red") {
    let msg = document.createElement("div"), cur = ++id;
    msg.setAttribute("id", "msg-" + cur);
    msg.setAttribute("class", "ui " + col + " inverted nag");
    msg.setAttribute("onclick", "$('#msg-" + cur + "').nag('hide');");
    msg.innerHTML = "<div class='title' style='color: #FFF;'>" + t + "</div>";
    document.getElementById("messages").appendChild(msg);
    $("#msg-" + cur).nag("show");
    setTimeout(function () {
        $("#msg-" + cur).nag("hide");
        setTimeout(function () {
            document.getElementById("messages").removeChild(msg);
        }, 2000);
    }, 2500);
}

function closeAllPage() {
    for (let i in pages) {
        document.getElementById(pages[i]).setAttribute("style", "display: none;");
        document.getElementById(pages[i] + "-lab").setAttribute("class", "item");
    }
}
function switchPage(s) {
    closeAllPage();
    try {
        document.getElementById(s).setAttribute("style", "display: block;");
        document.getElementById(s + "-lab").setAttribute("class", "active item");
    } catch {
        alert("the pages do not exist");
    }
}
function upgrade1() {
    let c = eval(func[2]);
    if (cnt < c) {
        alert("所有点数不足");
        return;
    }
    cnt -= c, clickPower *= 2, upgcnt[0]++, flushSun();
}

function flushSun() {
    for (let i in names) {
        let list = document.getElementsByName(names[i]);
        for (let j in list) {
            list[j].innerHTML = eval(func[i]);
        }
    }
    document.getElementById("redsun").setAttribute("width", 50 + Math.floor(Math.log10(cnt * 5. + 1)));
    document.getElementById("redsun").setAttribute("height", 50 + Math.floor(Math.log10(cnt * 5. + 1)));
}
function userClick() {
    cnt++;
    newMessage("您膜拜了 WYXkk");
    flushSun();
}

function startGame() {
    switchPage("Main");
    flushSun();
}
