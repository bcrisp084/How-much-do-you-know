var returnHome = document.querySelector("#home");
var clearBtn = document.querySelector("#clear");

returnHome.addEventListener("click", function () {
  location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
  highScoresArea.innerHTML = "";
  window.localStorage.clear();
});
