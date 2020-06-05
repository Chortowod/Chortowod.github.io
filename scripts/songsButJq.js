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

var availableTags = [
  "Ajin",
  "Ansatsu Kyoushitsu",
  "Biohazard: Vendetta",
  "Code Geass",
  "Godzilla",
  "JoJo's Bizarre Adventure",
  "Overlord",
  "Owari no Seraph",
  "Sakamoto Desu ga?",
  "Servamp",
  "Towa no Quon",
  "Yakusoku no Neverland"
];

var count = 0;
var points = 0;

$('#opVideo').prop('volume', 0.1);
$('#startButton').on('click', gameStart);
$("#tags").autocomplete( {source: availableTags} );
$("#draggable").draggable();
$("#draggable2").draggable();
// Кастомное контекстное меню
$(".resultCircle").on("contextmenu", showContextCircle);
$(document).bind("mousedown", closeContextCircle);


function gameStart() {
  count = 0;
  points = 0;
  removeConfetti();
  $('#pointsDiv').html("Набрано очков: " + points);
  $('#showResult').html("Жду ответа");
  $('#tags').prop('disabled', false);
  $('#nextButton').on("click", gameNext).prop("disabled", false).html("Ответить!");
  $('#startButton').off("click", gameStart).html("Стоп!").on("click", gameStop);
  gameChangeSrc();
}

function gameStop() {
    $('#startButton').off("click", gameStop).html("Рестарт!").on("click", gameStart);
    $('#nextButton').off("click", gameNext).off("click", gameNextPlay).prop("disabled", true);
    $('#opVideo').prop('src', "#").trigger('pause');
    $('#showResult').html("Игра окончена!");
    $('.resultCircle').css('background-color', '');
    startConfetti();
}

function gameChangeSrc() {
    $('#opVideo').trigger('pause').prop('currentTime', 0).prop('src', gameArray[count].gameUrl).trigger('play');
}

function gameNext() {
    $('#nextButton').off("click", gameNext).on("click", gameNextPlay);
    $('#nextButton').html("Дальше!");
    $('#opVideo').trigger('pause').prop('currentTime', 0).trigger('play');
    $('#opVideo').css('visibility', 'visible');
    $('#tags').prop('disabled', true);
    if ($('#tags').val() == gameArray[count].gameName) {
        $('.resultCircle').css('background-color', '#04ff00');
        $('#showResult').html("Верно! Это " + gameArray[count].gameName);
        $('#pointsDiv').html("Набрано очков: " + ++points);
    }
    else {
        $('.resultCircle').css('background-color', '#ff0000');
        $('#showResult').html("Неверно! Это " + gameArray[count].gameName);
    }
}

function gameNextPlay() {
    if (++count > 9) {
        gameStop();
        return;
    }
    $('#tags').prop('disabled', false);
    $('.resultCircle').css('background-color', '');
    $('#nextButton').off("click", gameNextPlay).on("click", gameNext);
    $('#nextButton').html("Ответить!");
    $('#opVideo').css('visibility', 'hidden');
    $('#showResult').html("Жду ответа");
    $('#tags').val("");
    gameChangeSrc();
}

function showContextCircle() {
  $("#context").css( {top: event.pageY + 2, left: event.pageX + 2} );
  $("#context").fadeIn();
  return false;
}

function closeContextCircle() {
  if ($(event.target).is('.resultCircle') && event.which == 3)
    return false;
  if (!$(event.target).parents(".context-menu").length > 0)
    $("#context").fadeOut();
}

  