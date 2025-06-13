for (var n = 0; n < document.querySelectorAll(".drum").length; n++) {
  document.querySelectorAll(".drum")[n].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
} //for detecting mouse click

document.addEventListener("keypress", function (event) {
  var buttonPressed = event.key;
  makeSound(buttonPressed);
  addAnimation(buttonPressed);
}); //for detecting keyboard buttons

var audioPath = "./sounds/";
function makeSound(key) {
  switch (key) {
    case "w":
    case "W":
      var audio = new Audio(audioPath + "tom-1.mp3");
      audio.play();
      break;
    case "a":
    case "A":
      var audio = new Audio(audioPath + "tom-2.mp3");
      audio.play();
      break;
    case "s":
    case "S":
      var audio = new Audio(audioPath + "tom-3.mp3");
      audio.play();
      break;
    case "d":
    case "D":
      var audio = new Audio(audioPath + "tom-4.mp3");
      audio.play();
      break;
    case "j":
    case "J":
      var audio = new Audio(audioPath + "snare.mp3");
      audio.play();
      break;
    case "k":
    case "K":
      var audio = new Audio(audioPath + "crash.mp3");
      audio.play();
      break;
    case "l":
    case "L":
      var audio = new Audio(audioPath + "kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function addAnimation(currentKey) {
  var activekey = document.querySelector("." + currentKey);
  activekey.classList.add("pressed");
  setTimeout(function () {
    activekey.classList.remove("pressed"), 2000;
  });
}
