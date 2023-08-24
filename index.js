var numberofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbuttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    animation(buttonInnerHTML);

  });
}

document.addEventListener("keypress",function(event) {
  makesound(event.key);
  animation(event.key);
  });


function makesound(key){

  switch (key) {
    case 'w':
      var W = new Audio("sounds/tom-1.mp3");
      W.play();
      break;

    case 'a':
      var A = new Audio("sounds/tom-2.mp3");
      A.play();
      break;

    case 's':
      var S = new Audio("sounds/tom-3.mp3");
      S.play();
      break;

    case 'd':
      var D = new Audio("sounds/tom-4.mp3");
      D.play();
      break;

    case 'j':
      var J = new Audio("sounds/snare.mp3");
      J.play();
      break;

    case 'k':
      var K = new Audio("sounds/crash.mp3");
      K.play();
      break;

    case 'l':
      var L = new Audio("sounds/kick-bass.mp3");
      L.play();
      break;

      default: console.log(buttonInnerHTML);
  }
}

function animation(currentkey){
var animationbutton = document.querySelector("." + currentkey);
animationbutton.classList.add("pressed");

setTimeout( function(){
  animationbutton.classList.remove("pressed");
  },100)
}
