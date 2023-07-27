var numberofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbuttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);


  });
}

document.addEventListener("keypress",function(event) {
  makesound(event.key);
  });


function makesound(key){

  switch (key) {
    case 'w':
      var W = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      W.play();
      break;

    case 'a':
      var A = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      A.play();
      break;

    case 's':
      var S = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      S.play();
      break;

    case 'd':
      var D = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
      D.play();
      break;

    case 'j':
      var J = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
      J.play();
      break;

    case 'k':
      var K = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
      K.play();
      break;

    case 'l':
      var L = new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
      L.play();
      break;

      default: console.log(buttonInnerHTML);
  }
}
