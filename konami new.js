// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b',
  71: 'g'
};

// sequences (must have the same length!!)
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var gravityCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'g', 'g'];

// a variable to remember the 'position' the user has reached so far.
var codePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var konamiKey = konamiCode[codePosition];
  var gravityKey = gravityCode[codePosition];

  // compare the key with the required key
  if (key == konamiKey || key == gravityKey) {
    // if the last key is reached, activate cheats
    if (codePosition == konamiCode.length-1) {
      if (key == konamiCode[codePosition]) {
        activateCheats(); 
      } else if (key == gravityCode[codePosition]) {
        activateGravity();
      } codePosition = -1;
    }
    // move to the next key in the konami code sequence
    codePosition++;
  } else {
    codePosition = 0;
  }
});

function activateCheats() {
  // alert("cheats activated");

  var elems = document.getElementsByClassName('konamiSecret');
  elems[0].style.display = 'block';
  elems[1].style.display = 'block';

  // var audio = new Audio('./nanomachines.mp3');
  // audio.play();
}

function activateGravity() {
  $('#wrapper').throwable({
    gravity:{x:0,y:Math.floor(Math.random() * 5)},
    drag:true,
    bounce:0.5,
    damping:0.01,
    autostart:true,
    collisionDetection: true
  });
}