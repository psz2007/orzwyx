let cnt = 0, id = 0;

const pages = ["Main", "Upgrade", "Achievement"];

function newMessage(t) {
    let msg = document.createElement("div"), cur = ++id;
    msg.setAttribute("id", "msg-" + cur);
    msg.setAttribute("class", "ui red nag");
    msg.setAttribute("onclick", "$('#msg-" + cur + "').nag('hide');");
    msg.innerHTML = "<div class='title'>" + t + "</div>";
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

function bless() {
    cnt++;
    newMessage("您膜拜了 WYXkk");
    document.getElementById("redsun").setAttribute("width", 50 + Math.floor(Math.sqrt(cnt / 3.)));
    document.getElementById("redsun").setAttribute("height", 50 + Math.floor(Math.sqrt(cnt / 3.)));
}

function startGame() {
    switchPage("Main");
}
