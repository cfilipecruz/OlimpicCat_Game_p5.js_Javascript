//Detetar colisão entre rectangulos

function rectRect(x1, y1, w1, h1, x2, y2, w2, h2) {

    // test for collision
    if (x1+w1/2 >= x2-w2/2 && x1-w1/2 <= x2+w2/2 && y1+h1/2 >= y2-h2/2 && y1-h1/2 <= y2+h2/2) {
      return true;    // if a hit, return true
    }
    else {            // if not, return false
      return false;
    }
  }