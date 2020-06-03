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



$('#opVideo').prop('volume', 0.1);
$('#startButton').on('click', gameStart);

var count = 0;
var points = 0;

function gameStart() {
  count = 0;
  points = 0;
  $('#pointsDiv').html(points);
  $('#showResult').html("Жду ответа");
  $('#nextButton').on("click", gameNext).prop("disabled", false);
  $('#startButton').off("click", gameStart).html("Стоп!").on("click", gameStop);
  gameChangeSrc();
}

function gameStop() {
    $('#startButton').off("click", gameStop).html("Рестарт!").on("click", gameStart);
    $('#nextButton').off("click", gameNext).prop("disabled", true);
    $('#opVideo').prop('src', "#").trigger('pause');
    $('#showResult').html("Игра окончена.");
}

function gameChangeSrc() {
    $('#opVideo').trigger('pause').prop('currentTime', 0).prop('src', gameArray[count].gameUrl).trigger('play');
}

function gameNext() {
    if ($('select').val() == gameArray[count].gameName) {
        $('#showResult').html("Верно!");
        $('#pointsDiv').html(++points);
    }
    else {
        $('#showResult').html("Неверно!");
    }
    if (++count > 9) {
        gameStop();
        return;
    }
    gameChangeSrc();
}


