
/*document.querySelector=要素の検索*/
/*currentTime=現在の再生位置*/


function skip15sec(){
  var player = document.querySelector("audio");
  player.currentTime = player.currentTime + 15;
}

function reverse15sec(){
  var player = document.querySelector("audio");
  player.currentTime = player.currentTime - 15;
}

function return0sec(){
  var player = document.querySelector("audio");
  player.currentTime = 0;
}

function repeat(){
  var player = document.querySelector("audio");
  player.loop = true;
}

function onskip15secButtonClicked(event){
  skip15sec();
}

function onreverse15secButtonClicked(event){
  reverse15sec();
}

function onreturn0secButtonClicked(event){
  return0sec();
}

function onrepeatButtonClicked(event){
  repeat();
}

var skip15secButton =
document.querySelector("#skip-15s-button");
skip15secButton.addEventListener("click",onskip15secButtonClicked);

var reverse15secButton =
document.querySelector("#reverse-15s-button");
reverse15secButton.addEventListener("click",onreverse15secButtonClicked);

var repeatButton =
document.querySelector("#repeat-button");
repeatButton.addEventListener("click",onrepeatButtonClicked);


/**/

function onPlaybackRateChanged1(event){
  var rate = playbackRateControl.value;
  setPlaybackRate(1);
}

var playbackRateControl =
document.querySelector("#playback1-button");
playbackRateControl.addEventListener("click",onPlaybackRateChanged1);

function setPlaybackRate1(value){
  var player = document.querySelector("audio");
  player.playbackRate = value;
}

function showPlaybackRate1(value){
  var label =
  document.querySelector("#playback1-button");
  label.textContent = "x" + value;
}

function setPlaybackRate1(value){
  var player = document.querySelector("audio");
  player.playbackRate = value;
  showPlaybackRate(value);
}



function onPlaybackRateChanged(event){
  var rate = playbackRateControl.value;
  setPlaybackRate(rate);
}

var playbackRateControl =
document.querySelector("#playback-rate-control > input");
playbackRateControl.addEventListener("change",onPlaybackRateChanged);

function setPlaybackRate(value){
  var player = document.querySelector("audio");
  player.playbackRate = value;
}

function showPlaybackRate(value){
  var label =
  document.querySelector("#playback-rate-control > span");
  label.textContent = "x" + value;
}

function setPlaybackRate(value){
  var player = document.querySelector("audio");
  player.playbackRate = value;
  showPlaybackRate(value);
}
