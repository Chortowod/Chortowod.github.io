
function start() {
  var elemS = document.getElementById("Sakamoto");
  elemS.myParam = "https://files.catbox.moe/oup1nv.webm";
  elemS.addEventListener ("click", srcChangeS);
  var elemA = document.getElementById("Ajin");
  elemA.myParam = "https://animethemes.moe/video/Ajin-OP1.webm";
  elemA.addEventListener ("click", srcChangeS);
  var elemO = document.getElementById("Overlord");
  elemO.myParam = "https://files.catbox.moe/3ticyq.webm";
  elemO.addEventListener ("click", srcChangeS);
}

function srcChangeS(evt) {
  var elem = document.getElementById("opVideo");
  elem.pause();
  elem.src = evt.currentTarget.myParam;
  elem.currentTime = 0;
  elem.volume = 0.35;
  elem.play();
}

start();