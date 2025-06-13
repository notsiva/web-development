var buttoncolors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
});

function audioPlay(audiofile) {
  var audioPath = "./sounds/";
  var audio = new Audio(audioPath + audiofile + ".mp3");
  audio.play();
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttoncolors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("." + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  audioPlay(randomChosenColor);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
    100;
  });
}

$(".btn").click(function () {
  var buttonName = $(this).attr("id");
  audioPlay(buttonName);
  userClickedPattern.push(buttonName);
  animatePress(buttonName);
  checkAnswer(userClickedPattern.length - 1);
});



function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Succes");
    if (gamePattern.length == userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    audioPlay("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").remove("game-over");
    }, 200);
  }
}
