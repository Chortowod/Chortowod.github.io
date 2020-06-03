class Game {

}

var gameArray = [
  {"gameName":"Overlord","gameUrl":"https://files.catbox.moe/3ticyq.webm"},
  {"gameName":"Servamp","gameUrl":"https://files.catbox.moe/5d34xl.webm"},
  {"gameName":"Overlord","gameUrl":"https://files.catbox.moe/3xvs03.webm"},
  {"gameName":"Ajin","gameUrl":"https://animethemes.moe/video/Ajin-OP1.webm"},
  {"gameName":"JoJo's Bizarre Adventure","gameUrl":"https://animethemes.moe/video/JojoNoKimyouNaBoukenS2-OP1.webm"},
  {"gameName":"JoJo's Bizarre Adventure","gameUrl":"https://animethemes.moe/video/JojoNoKimyouNaBoukenS5-OP2.webm"},
  {"gameName":"Overlord","gameUrl":"https://files.catbox.moe/bip7jl.webm"},
  {"gameName":"JoJo's Bizarre Adventure","gameUrl":"https://files.catbox.moe/gxpgd4.webm"},
  {"gameName":"Sakamoto Desu ga?","gameUrl":"https://files.catbox.moe/oup1nv.webm"},
  {"gameName":"Servamp","gameUrl":"https://files.catbox.moe/mvvrau.webm"}
];
var elem = document.getElementById("opVideo");
elem.volume = 0.1;
var result = document.getElementById("showResult");
var pointsDiv = document.getElementById('pointsDiv');
var selectAnswer = document.getElementsByTagName('select')[0];

var startButton = document.getElementById("startButton");
startButton.addEventListener ("click", gameStart);

var nextButton = document.getElementById("nextButton");
nextButton.addEventListener ("click", gameNext);

var count = 0;
var points = 0;

function gameStart() {
  count = 0;
  points = 0;
  pointsDiv.innerHTML = points;
  result.innerHTML = "Жду ответа";
  nextButton.disabled = false;
  nextButton.addEventListener ("click", gameNext);
  startButton.innerHTML = "Стоп!";
  startButton.removeEventListener("click", gameStart);
  startButton.addEventListener ("click", gameStop);
  gameChangeSrc();
}

function gameStop() {
  startButton.innerHTML = "Рестарт!";
  nextButton.removeEventListener("click", gameNext);
  nextButton.disabled = true;
  startButton.removeEventListener("click", gameStop);
  startButton.addEventListener ("click", gameStart);
  elem.pause();
  elem.src = "#";
  result.innerHTML = "Игра окончена.";
}

function gameChangeSrc() {
  elem.pause();
  elem.src = gameArray[count].gameUrl;
  elem.currentTime = 0;
  elem.play();
}

function gameNext() {
  if (selectAnswer.value == gameArray[count].gameName) {
    result.innerHTML = "Верно!";
    pointsDiv.innerHTML = ++points;
  }
  else {
    result.innerHTML = "Неверно!";
  }
  if (++count > 9) {
    gameStop();
    return;
  }
  gameChangeSrc();
}



function srcChangeS(evt) {
  elem.pause();
  elem.src = evt.currentTarget.myParam;
  elem.currentTime = 0;
  elem.play();
}


