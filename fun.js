let x = 1;
let bgImage = document.getElementById('landscape');

function move(){
  x++;

  if (x >= 125) {
    x = 0;
  }
  bgImage.style.backgroundPositionX = x + "0%";

}

setInterval(move, 50);