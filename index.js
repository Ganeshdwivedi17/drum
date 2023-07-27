var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  var beat = new Audio('D:\Web development My\JavaScript\Drum Kit\Drum Kit Starting Files\sounds\crash.mp3');
  beat.play();
  alert("working");


});

}
