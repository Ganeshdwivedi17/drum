var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  var beat = new Audio('sounds\crash.mp3');
  beat.play();
  alert("working");


});

}
