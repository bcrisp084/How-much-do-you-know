var returnHome = document.querySelector("#home");
var clearBtn = document.querySelector("#clear");
var list = document.getElementById("list");

returnHome.addEventListener("click", function () {
  location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
  window.localStorage.clear();
  list.innerHTML = "";
});

function displayScores() {
  var highscores = JSON.parse(localStorage.getItem("highscores"));
  for (let i = 0; i < highscores.length; i++) {
    var li = document.createElement("li");
    const element = highscores[i];
    li.innerHTML = element.initials + element.score;
    list.append(li);
  }
}
displayScores();
